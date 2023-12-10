import { SimpleAccountAPI } from 'actasdk/packages/sdk/dist/src/account/SimpleAccountAPI'
import Link from 'next/link'
import { ERC20Tokens } from '../config/tokens'
import {
  useEthersProvider,
  useEthersSigner,
  useSmartAccount,
} from '../hooks/smartAccount'
import { BigNumber, ethers } from 'ethers'
import { useEffect, useState } from 'react'
import { frequency } from '../config/data'
import {
  approveSwapToken,
  createPermit,
  encodeERC20TransferFrom,
  getSwapCalldata,
  getSwapQuote,
} from '../services/tokenapproval'
import { sendOpToPimlico } from '../services/api'
import { printOp } from '../utils'
import superagent from 'superagent'

interface Tokentype {
  eip2612: boolean
  address: string
  symbol: string
  decimals: number
  name: string
  logoURI: string
  tags: string[]
}

const Conditionedop = (props: { smartAccountAddress: string }) => {
  const { smartAccountAddress } = props
  console.log(smartAccountAddress)
  const provider = useEthersProvider() as ethers.providers.JsonRpcProvider
  const signer = useEthersSigner() as ethers.providers.JsonRpcSigner
  const { api } = useSmartAccount()
  const getEIP2612 = () => {
    const tokens = Object.values(ERC20Tokens.tokens).filter((token) =>
      token.hasOwnProperty('eip2612')
    )
    const eip2612tokenArray = tokens.map((token, index) => {
      return {
        ...token,
        eip2612: true,
      }
    })
    return eip2612tokenArray
  }

  const [selectedToken1, setSelectedToken1] = useState<string>()
  const [selectedToken2, setSelectedToken2] = useState<string>()
  const [amount, setAmount] = useState<string>('0')
  const [trigger, setTrigger] = useState<string>('0')
  const [txnState, setTxnState] = useState<string>('Submit')

  const calculateQuote = async () => {
    if (selectedToken1 !== undefined && selectedToken2 !== undefined) {
      const quote = await getSwapQuote(selectedToken1, selectedToken2, amount)
      console.log(`quote: ${JSON.stringify(quote)}`)
    }
  }
  useEffect(() => {
    calculateQuote()
  }, [selectedToken1, selectedToken2])

  const createSwapOp = async () => {
    setTxnState('preparing Permit')
    const owner = await signer.getAddress()
    const selectedTokenInfo1 = getEIP2612().find(
      (token) => token.address === selectedToken1
    ) as Tokentype

    const selectedTokenInfo2 = getEIP2612().find(
      (token) => token.address === selectedToken2
    ) as Tokentype

    const deadline =
      Math.floor(Date.now() / 1000) + Math.floor(Date.now() / 1000)

    setTxnState('Sign Permit')
    const permit = await createPermit(
      smartAccountAddress,
      deadline,
      BigNumber.from(amount),
      provider,
      signer,
      selectedTokenInfo1.name,
      selectedTokenInfo1.address
    )
    setTxnState('transferring asset')
    const callData = encodeERC20TransferFrom(
      owner,
      smartAccountAddress,
      parseInt(amount),
      selectedTokenInfo1.address
    )
    const op = await api.createSignedUserOp({
      target: selectedTokenInfo1.address,
      data: callData,
      gasLimit: 3000000,
    })
    const userOp = await printOp([op])

    const result = await sendOpToPimlico(
      userOp[0],
      '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'
    )

    console.log('approve to swap')

    await approveSwapToken(provider, signer, selectedTokenInfo1.address, amount)

    const swapCallData = await getSwapCalldata(
      smartAccountAddress,
      selectedTokenInfo1.address,
      selectedTokenInfo2.address,
      amount
    )
    setTxnState('complete')
    const op2 = await api.createSignedUserOp({
      target: swapCallData.tx.to,
      data: swapCallData.tx.data,
      gasLimit: 3000000,
    })
    const swapOp = await printOp([op2])
    const conditionedparams = {
      sender: smartAccountAddress,
      userop: swapOp,
      trigger: trigger,
      src: selectedTokenInfo1.address,
      dst: selectedTokenInfo2.address,
      amount: amount,
    }

    await superagent
      .post('http://127.0.0.1:8545/newconditionedop')
      .send(conditionedparams)
      .then(async (res) => {
        if (res.status === 200) {
          console.log('scheduled op sent successfully')
        }
      })
      .catch(() => {
        console.log('error while sending the scheduled txn.')
      })
  }

  return (
    <div className="h-full w-full flex flex-row justify-between gap-10 items-center p-4 relative">
      <div className="h-full shadow-lg w-1/3 outline-none border rounded-3xl px-8 py-8 relative">
        <div>
          <h2 className="text-3xl font-bold text-violet-500">Acta-Pay</h2>
          <h5 className="text-lg text-violet-500">Programmble-Payments</h5>
        </div>
        <div>
          <ul className="flex-col">
            <li className="my-6">
              <a className="text-black hover:font-semibold" href="#">
                Periodic Payment
              </a>
            </li>
            <li className="my-6">
              <a className="text-black hover:font-semibold" href="#">
                Time Bound Payment
              </a>
            </li>
            <li className="my-6">
              <a className="text-black hover:font-semibold" href="#">
                Conditional Swap
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center absolute bottom-8 left-0 w-full px-8">
          <h2 className="text-black">Smart wallet</h2>
          <h2 className="text-black hover:font-semibold">0xksldl...jdkkdd</h2>
        </div>
      </div>
      <div className="h-full shadow-lg w-full outline-none border rounded-3xl p-6 flex flex-col">
        <div className="flex justify-start items-center w-full my-6">
          <label htmlFor="token" className="w-44">
            Swap from
          </label>
          <select
            className="py-2 px-3 w-64 border-solid border-2 border-gray-400 rounded-lg"
            id="token"
            value={selectedToken1}
            onChange={(e) => {
              setSelectedToken1(e.target.value)
            }}
          >
            {getEIP2612().map((token, index) => {
              return (
                <option key={index} value={token.address}>
                  {token.symbol}
                </option>
              )
            })}
          </select>
        </div>
        <div className="flex justify-start items-center w-full my-6">
          <label htmlFor="token" className="w-44">
            Swap to
          </label>
          <select
            className="py-2 px-3 w-64 border-solid border-2 border-gray-400 rounded-lg"
            id="token"
            value={selectedToken2}
            onChange={(e) => {
              setSelectedToken2(e.target.value)
            }}
          >
            {getEIP2612().map((token, index) => {
              return (
                <option key={index} value={token.address}>
                  {token.symbol}
                </option>
              )
            })}
          </select>
        </div>
        <div className="flex justify-start items-center w-full my-6">
          <label htmlFor="token" className="w-44">
            Condition
          </label>
          <select
            className="py-2 px-3 w-64  border-solid border-2 border-gray-400 rounded-lg"
            id="token"
            value={'swap'}
          >
            <option value="swap">swap</option>
          </select>
        </div>
        <div className="flex justify-start items-center w-full my-6">
          <label htmlFor="to" className="w-44">
            Sell Amount
          </label>
          <input
            type="text"
            name="to"
            id="to"
            className="py-2 px-3 w-64  border-solid border-2 border-gray-400 rounded-lg"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
            }}
          />
        </div>
        <div className="flex justify-start items-center w-full my-6">
          <label htmlFor="to" className="w-44">
            Trigger Amount
          </label>
          <input
            type="text"
            name="to"
            id="to"
            className="py-2 px-3 w-64  border-solid border-2 border-gray-400 rounded-lg"
            value={trigger}
            onChange={(e) => {
              setTrigger(e.target.value)
            }}
          />
        </div>
        <div className="flex flex-row justify-center items-center w-96 ml-16">
          <button
            onClick={(e) => {
              createSwapOp()
            }}
            className="bg-violet-500 text-lg text-white py-2 px-6 font-bold rounded-2xl my-6 w-40"
          >
            {txnState}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Conditionedop
