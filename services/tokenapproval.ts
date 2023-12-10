import { BigNumber, Signer, ethers } from 'ethers'
import { TDAI__factory } from '../typechain'
import {
  getHttpRpcClient,
  getIntervalUserOpReceipt,
  printOp,
} from 'actasdk/packages/sdk/dist/src/utils/utils'
import { useEthersProvider, useSmartAccount } from '../hooks/smartAccount'
import { sendOpToPimlico, useEthersSigner } from './api'
import { getSmartAccount } from './wallet'
import axios from 'axios'
import { ERC721TokenReceiver__factory } from '@zerodevapp/contracts'

const bundlerURL = process.env.NEXT_PUBLIC_BUNDLER_URL as string
const entryPointAddress = process.env.NEXT_PUBLIC_ENTRY_POINT as string
// put your token name
const domainVersion = '1' // leave this to "1"
const chainId = 137 // this is for the chain's ID. value is 1 for remix
const contractAddress = '0x9c9e5fd8bbc25984b178fdce6117defa39d2db39'

export const checkTokenAllowence = async (
  spender: string,
  signer: ethers.providers.JsonRpcSigner,
  tokenAddress: string
) => {
  const owner = await signer.getAddress()
  const ERC20 = TDAI__factory.connect(tokenAddress, signer)
  const allownece = await ERC20.allowance(owner, spender)
  const number = BigNumber.from(allownece)
  return number
}

export const encodeERC20TransferFrom = (
  owner: string,
  receiver: string,
  amount: number,
  tokenAddress: string
) => {
  const ERC20 = TDAI__factory.connect(tokenAddress)
  const data = ERC20.interface.encodeFunctionData('transferFrom', [
    owner,
    receiver,
    amount,
  ])
  return data
}

const encodePermitData = (
  owner: string,
  spender: string,
  value: ethers.BigNumber,
  deadline: number,
  v: any,
  r: any,
  s: any,
  tokenAddress: string
) => {
  const ERC20 = TDAI__factory.connect(tokenAddress)
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

export const createPermit = async (
  spender: string,
  deadline: number,
  value: ethers.BigNumber,
  provider: ethers.providers.JsonRpcProvider,
  signer: ethers.providers.JsonRpcSigner,
  domainName: string,
  tokenAddress: string
) => {
  console.log(`domainName:`, domainName)
  console.log(`tokenAddress:`, tokenAddress)
  const owner = await signer.getAddress()
  const TDAI = TDAI__factory.connect(tokenAddress, signer)
  const nonce = await TDAI.nonces(owner)
  const permit = { owner: owner, spender, value, nonce, deadline }
  const Permit = [
    { name: 'owner', type: 'address' },
    { name: 'spender', type: 'address' },
    { name: 'value', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'deadline', type: 'uint256' },
  ]
  const domain = {
    name: domainName,
    version: domainVersion,
    chainId: chainId,
    verifyingContract: tokenAddress,
  }
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
    signature.s,
    tokenAddress
  )
  const op = await api.createSignedUserOp({
    target: tokenAddress,
    data: callData,
    gasLimit: 3000000,
  })
  const userOp = await printOp([op])

  await sendOpToPimlico(userOp[0], entryPointAddress)
}

export const approveSwapToken = async (
  provider: ethers.providers.JsonRpcProvider,
  signer: ethers.providers.JsonRpcSigner,
  tokenAddress: string,
  amount: string
) => {
  try {
    const endpoint = 'http://127.0.0.1:8485/api/getapprovaldata'

    const response = await axios.post(endpoint, {
      chain: 137,
      tokenAddress: tokenAddress,
      amount: '100000000',
    })
    console.log(response)
    const api = await getSmartAccount(provider, signer)
    const op = await api.createSignedUserOp({
      target: response.data.to,
      data: response.data.data,
      gasLimit: 3000000,
    })
    const userOp = await printOp([op])
    await sendOpToPimlico(userOp[0], entryPointAddress)
  } catch (error) {
    console.log(error)
  }
}

export const getSwapQuote = async (
  src: string,
  dst: string,
  amount: string
) => {
  try {
    const endpoint = 'http://127.0.0.1:8485/api/getswapquote'

    const response = await axios.post(endpoint, {
      chain: 137,
      src: src,
      dst: dst,
      amount: amount,
    })
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

export const getTokenList = async () => {
  try {
    const endpoint = 'http://127.0.0.1:8485/api/gettokenlist'

    const response = await axios.post(endpoint, {})
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getSwapCalldata = async (
  smartAccount: string,
  src: string,
  dst: string,
  amount: string
) => {
  const endpoint = 'http://127.0.0.1:8485/api/getswapcalldata'

  const response = await axios.post(endpoint, {
    chain: 137,
    src: src,
    dst: dst,
    amount: amount,
    from: smartAccount,
    slippage: '5',
  })
  return response.data
}
