import Link from 'next/link'
import { useEffect, useState } from 'react'
import { frequency } from '../config/data'
import {
  checkTokenAllowence,
  createPermit,
  getTokenList,
} from '../services/tokenapproval'
import { ERC20Tokens } from '../config/tokens'
import {
  useEthersProvider,
  useEthersSigner,
  useSmartAccount,
} from '../hooks/smartAccount'
import { BigNumber, ethers } from 'ethers'
import { createScheduledTransaction } from '../services/wallet'
const Frequentop = (props: { smartAccountAddress: string }) => {
  const { smartAccountAddress } = props
  console.log(smartAccountAddress)
  const provider = useEthersProvider() as ethers.providers.JsonRpcProvider
  const signer = useEthersSigner() as ethers.providers.JsonRpcSigner
  const { api } = useSmartAccount()

  interface Tokentype {
    eip2612: boolean
    address: string
    symbol: string
    decimals: number
    name: string
    logoURI: string
    tags: string[]
  }
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
  const [receiver, setReceiver] = useState<string>('')
  const [selectedToken, setSelectedToken] = useState<string>()
  const [amount, setAmount] = useState<string>('0')
  const [delay, setDelay] = useState<string>(frequency[0].value)
  const [count, setCount] = useState<number>(1)
  const [eip2612Token, setEip2612Token] = useState<Array<Tokentype>>()

  const createTokenPermit = async () => {
    const allowence = await checkTokenAllowence(
      smartAccountAddress,
      signer,
      selectedToken as string
    )
    if (allowence >= BigNumber.from(amount)) {
      const selectedTokenInfo = getEIP2612().find(
        (token) => token.address === selectedToken
      ) as Tokentype
      console.log(`tokenAddress: ${selectedTokenInfo.address}`)
      const scheduledpayment = await createScheduledTransaction(
        provider,
        api,
        receiver,
        selectedTokenInfo.address,
        count,
        BigNumber.from(amount),
        delay
      )
      console.log(scheduledpayment)
    } else {
      const selectedTokenInfo = getEIP2612().find(
        (token) => token.address === selectedToken
      ) as Tokentype
      console.log(`tokenAddress: ${selectedTokenInfo.address}`)
      const deadline = Math.floor(Date.now() / 1000) + 4200
      const uoHash = await createPermit(
        smartAccountAddress,
        deadline,
        BigNumber.from(amount).mul('2'),
        provider,
        signer,
        selectedTokenInfo.name,
        selectedTokenInfo.address
      )
      const scheduledpayment = await createScheduledTransaction(
        provider,
        api,
        receiver,
        selectedTokenInfo.address,
        count,
        BigNumber.from(amount),
        delay
      )
      console.log(scheduledpayment)
    }
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
          <h2 className="text-black hover:font-semibold">
            {smartAccountAddress.slice(0, 8) +
              '...' +
              smartAccountAddress.slice(-6)}
          </h2>
        </div>
      </div>
      <div className="h-full shadow-lg w-full outline-none border rounded-3xl p-6 flex flex-col">
        <div className="flex justify-start items-center w-full my-6">
          <label htmlFor="to" className="w-44">
            Send To
          </label>
          <input
            type="text"
            name="to"
            id="to"
            className="py-2 px-3 w-1/2 border-solid border-2 border-gray-400 rounded-lg"
            value={receiver}
            onChange={(e) => {
              setReceiver(e.target.value)
            }}
          />
        </div>
        <div className="flex justify-start items-center w-full my-6">
          <label htmlFor="token" className="w-44">
            Select Token
          </label>
          <select
            className="py-2 px-3 w-64 border-solid border-2 border-gray-400 rounded-lg"
            id="token"
            value={selectedToken}
            onChange={(e) => {
              setSelectedToken(e.target.value)
            }}
          >
            {getEIP2612().map((token, index) => {
              return (
                <option value={token.address} key={index}>
                  {token.symbol}
                </option>
              )
            })}
          </select>
        </div>
        <div className="flex justify-start items-center w-full my-6">
          <label htmlFor="amount" className="w-44">
            Enter Amount
          </label>
          <input
            type="string"
            name="amount"
            id="amount"
            className="py-2 px-3 w-64  border-solid border-2 border-gray-400 rounded-lg"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
            }}
          />
        </div>
        <div className="flex justify-start items-center w-full my-6">
          <label htmlFor="frame" className="w-44">
            Send Every
          </label>
          <select
            className="py-2 px-3 w-64  border-solid border-2 border-gray-400 rounded-lg"
            id="frame"
            value={delay}
            onChange={(e) => {
              setDelay(e.target.value)
            }}
          >
            {frequency.map((time, index) => {
              return (
                <option value={time.value} key={index}>
                  {time.name}
                </option>
              )
            })}
          </select>
        </div>
        <div className="flex justify-start items-center w-full my-6">
          <label htmlFor="till" className="w-44">
            Times
          </label>
          <select
            className="py-2 px-3 w-64 border-solid border-2 border-gray-400 rounded-lg"
            id="till"
            value={count}
            onChange={(e) => {
              setCount(parseInt(e.target.value))
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((count, index) => {
              return (
                <option value={count} key={index}>
                  {count}
                </option>
              )
            })}
          </select>
        </div>
        <div className="flex flex-row justify-center items-center w-96 ml-16">
          <button
            onClick={(e) => {
              createTokenPermit()
            }}
            className="bg-violet-500 text-lg text-white py-2 px-6 font-bold rounded-2xl my-6 w-40"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Frequentop
