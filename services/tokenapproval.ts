import { BigNumber, Signer, ethers } from 'ethers'
import { TDAI__factory } from '../typechain'
import {
  getHttpRpcClient,
  getIntervalUserOpReceipt,
  printOp,
} from 'actasdk/packages/sdk/dist/src/utils/utils'
import { useEthersProvider, useSmartAccount } from '../hooks/smartAccount'
import { useEthersSigner } from './api'
import { getSmartAccount } from './wallet'
import axios from 'axios'

const bundlerURL = process.env.NEXT_PUBLIC_BUNDLER_URL as string
const entryPointAddress = process.env.NEXT_PUBLIC_ENTRY_POINT as string

const domainName = 'USDC' // put your token name
const domainVersion = '1' // leave this to "1"
const chainId = 137 // this is for the chain's ID. value is 1 for remix
const contractAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'

export const checkTokenAllowence = async (
  spender: string,
  signer: ethers.providers.JsonRpcSigner
) => {
  const owner = await signer.getAddress()
  const ERC20 = TDAI__factory.connect(contractAddress, signer)
  const allownece = await ERC20.allowance(owner, spender)
  const number = BigNumber.from(allownece).toString()
  return number
}

const encodePermitData = (
  owner: string,
  spender: string,
  value: ethers.BigNumber,
  deadline: number,
  v: any,
  r: any,
  s: any
) => {
  const ERC20 = TDAI__factory.connect(contractAddress)
  const callData = ERC20.interface.encodeFunctionData('permit', [
    owner,
    spender,
    value,
    deadline,
    v,
    r,
    s,
  ])
  return callData
}

const domain = {
  name: domainName,
  version: domainVersion,
  chainId: chainId,
  verifyingContract: contractAddress,
}

export const createPermit = async (
  spender: string,
  deadline: number,
  value: ethers.BigNumber,
  provider: ethers.providers.JsonRpcProvider,
  signer: ethers.providers.JsonRpcSigner
) => {
  const owner = await signer.getAddress()
  const TDAI = TDAI__factory.connect(contractAddress, signer)
  const nonce = await TDAI.nonces(owner)
  const permit = { owner: owner, spender, value, nonce, deadline }
  const Permit = [
    { name: 'owner', type: 'address' },
    { name: 'spender', type: 'address' },
    { name: 'value', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'deadline', type: 'uint256' },
  ]
  const types = {
    Permit: Permit,
  }
  const rawSig = await signer._signTypedData(domain, types, permit)
  const signature = ethers.utils.splitSignature(rawSig)
  const recovered = ethers.utils.verifyTypedData(
    domain,
    types,
    permit,
    signature
  )
  console.log(`signature: ${signature}`)
  console.log(`recovered: ${recovered}`)
  console.log(`r: ${signature.r}, s: ${signature.s}, v: ${signature.v}`)
  const api = await getSmartAccount(provider, signer)
  const callData = encodePermitData(
    owner,
    spender,
    value,
    deadline,
    signature.v,
    signature.r,
    signature.s
  )
  const op = await api.createSignedUserOp({
    target: contractAddress,
    data: callData,
    gasLimit: 3000000,
  })
  const userOp = await printOp([op])

  const pimlicoEndpoint = `https://api.pimlico.io/v1/polygon/rpc?apikey=b76093ab-7f5e-492b-8c56-1cbde55717e1`
  const pimlicoProvider = new ethers.providers.StaticJsonRpcProvider(
    pimlicoEndpoint
  )
  const userOperationHash = await pimlicoProvider.send(
    'eth_sendUserOperation',
    [JSON.parse(userOp[0]), entryPointAddress]
  )
  console.log(userOperationHash)
}

export const approveSwapToken = async () => {
  try {
    const endpoint = 'https://api.1inch.dev/swap/v5.2/137/approve/transaction'

    const config = {
      headers: {
        Authorization: 'Bearer BlxT8DmhrbkPgdYUT69nkExBA2jbK2wL',
        'Access-Control-Allow-Origin': '*',
      },
      params: {
        tokenAddress: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        amount: '100000000000',
      },
    }
    const response = await axios.get(endpoint, {})
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
