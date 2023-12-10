import { EntryPoint__factory } from 'actasdk/packages/sdk/dist/typechain-types'
import { BigNumber, BigNumberish, ethers, Signer } from 'ethers'
import { SimpleAccountAPI } from 'actasdk/packages/sdk/dist/src/account/SimpleAccountAPI'
import { encodeTransferERC20, getFrequencyInMs } from '../utils'
import {
  getHttpRpcClient,
  getIntervalUserOpReceipt,
  printOp,
} from 'actasdk/packages/sdk/dist/src/utils/utils'
import { getPaymaster } from 'actasdk/packages/sdk/dist/src/paymaster'
import { txnState } from './api'
import superagent from 'superagent'

const paymasterURL = process.env.NEXT_PUBLIC_PAYMASTER_URL as string
const bundlerURL = process.env.NEXT_PUBLIC_BUNDLER_URL as string
const entryPointAddress = process.env.NEXT_PUBLIC_ENTRY_POINT as string
const factoryAddress = process.env.NEXT_PUBLIC_ACCOUNT_FACTORY as string
const executionParamsUrl = process.env.NEXT_PUBLIC_EXECUTOR_URL as string

interface UserOpStruct {
  sender: string
  nonce: BigNumberish
  initCode: string
  callData: string
  callGasLimit: BigNumberish
  verificationGasLimit: BigNumberish
  preVerificationGas: BigNumberish
  maxFeePerGas: BigNumberish
  maxPriorityFeePerGas: BigNumberish
  paymasterAndData: string
  signature: string
}

export const getSmartAccount = async (
  provider: ethers.providers.JsonRpcProvider,
  signer: Signer
) => {
  const paymasterAPI = await getPaymaster(paymasterURL)
  const api = new SimpleAccountAPI({
    owner: signer,
    provider: provider,
    entryPointAddress: entryPointAddress,
    factoryAddress: factoryAddress,
    paymasterAPI: paymasterAPI,
  })
  return api
}

export const getSmartAccountAPI = async (
  provider: ethers.providers.JsonRpcProvider,
  signer: Signer
) => {
  const paymasterAPI = await getPaymaster(paymasterURL)
  const api = new SimpleAccountAPI({
    owner: signer,
    provider,
    entryPointAddress,
    factoryAddress: factoryAddress,
    paymasterAPI: paymasterAPI,
  })
  return api
}

export const sendNewTransaction = async (
  provider: ethers.providers.JsonRpcProvider,
  signer: Signer,
  stateFns: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  console.log('sendNewTransaction:: ------->')
  txnState('creating new userOp', stateFns)

  const chainId = (await provider.getNetwork()).chainId
  const paymasterAPI = await getPaymaster(paymasterURL)
  const entrypointView = EntryPoint__factory.connect(entryPointAddress, signer)

  txnState(
    'waiting for verifying paymaster to sponsor the transaction request...',
    stateFns
  )

  const api = new SimpleAccountAPI({
    owner: signer,
    provider,
    entryPointAddress,
    factoryAddress,
    paymasterAPI: paymasterAPI,
  })
  console.log('sendNewTransaction:: api -------->', api)
  console.log(
    'sendNewTransaction:: getAccountAddress -------->',
    await api.getAccountAddress()
  )

  // Send "Hello World" to a random address
  const op = await api.createSignedUserOp({
    target: '0x83fc020d7681513263042e6c2c93d0137318dc0d',
    data: '0x48656c6c6f20776f726c64',
    gasLimit: 4000000,
  })
  const userOp = await printOp([op])
  // console.log("Signed UserOp");
  // console.log(userOp);
  // const client = await getHttpRpcClient(
  //   provider,
  //   bundlerURL,
  //   entryPointAddress
  // );

  // txnState("Sending transaction to bundler...", stateFns);

  // const uoHash = await client.sendUserOpToBundler(JSON.parse(userOp[0]));
  // txnState(`userOp hash: ${uoHash}`, stateFns);
  // console.log(`userOp hash: ${uoHash}`);
  // txnState("waiting for transaction confirmation", stateFns);
  // const fromBlock = (await provider.getBlockNumber()) - 1000;
  // const queryFromBlock = chainId === 31337 ? 0 : fromBlock;
  // let txnHash = (await getIntervalUserOpReceipt(
  //   uoHash,
  //   180000,
  //   3000,
  //   entrypointView,
  //   queryFromBlock
  // )) as string;
  // txnState(`Transaction successful✅, txnHash: ${txnHash}`, stateFns);
  // return txnHash;
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

export const createScheduledTransaction = async (
  provider: ethers.providers.JsonRpcProvider,
  api: SimpleAccountAPI,
  recipientAddress: string,
  tokenAddress: string,
  count: number,
  amount: BigNumber,
  selectedFrequency: string
) => {
  const callData = await encodeTransferERC20(
    tokenAddress,
    api.owner,
    recipientAddress,
    amount
  )
  const scheduledops = await api.getMerkleOps(
    entryPointAddress,
    tokenAddress,
    count,
    callData,
    selectedFrequency
  )
  console.log('got merkle ops')
  let merkleUserOpHashesFromBundler: Array<string> = []

  const ops = scheduledops.map((userOp) => {
    return {
      userOpHash: userOp.hash,
      executionTime: userOp.executionTime,
      userop: userOp.userOp,
    }
  })

  await superagent
    .post(executionParamsUrl)
    .send(ops)
    .then(async (res) => {
      if (res.status === 200) {
        console.log('scheduled op sent successfully')
      }
    })
    .catch(() => {
      console.log('error while sending the scheduled txn.')
    })

  return merkleUserOpHashesFromBundler
}
