import { BigNumber, ethers } from 'ethers'
import {
  useEthersProvider,
  useEthersSigner,
  useSmartAccount,
} from '../hooks/smartAccount'
import {
  approveSwapToken,
  checkTokenAllowence,
  createPermit,
} from '../services/tokenapproval'
import { useAccount } from 'wagmi'
import ConnectModal from '../components/ConnectModal'
import { sendNewTransaction } from '../services/wallet'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Home() {
  const { isConnected } = useAccount()
  const { address } = useSmartAccount()
  const provider = useEthersProvider() as ethers.providers.JsonRpcProvider
  const signer = useEthersSigner() as ethers.providers.JsonRpcSigner
  const checkApproval = async () => {
    const allowenceAmount = await checkTokenAllowence(address, signer)
    console.log(`allowence amount: ${allowenceAmount}`)
  }

  const [first, setfirst] = useState<string | undefined>('')

  const createTokenPermit = async () => {
    const deadline = Math.floor(Date.now() / 1000) + 4200
    const uoHash = await createPermit(
      address,
      deadline,
      BigNumber.from('100'),
      provider,
      signer
    )
    console.log(uoHash)
  }

  return (
    <div>
      {isConnected && (
        <ConnectModal
          isConnected={isConnected}
          smartWallet={address}
          key={'kkdkd'}
        />
      )}
      {address !== '' && <p>{address}</p>}
      <Navbar smartWallet={address} />
      <div>
        <button
          onClick={(e) => {
            if (address !== '') {
              createTokenPermit()
            }
          }}
        >
          permit
        </button>
        <button
          onClick={(e) => {
            if (address !== '') {
              checkApproval()
            }
          }}
        >
          check allownence
        </button>
        <br />
        <br />
        <button
          onClick={(e) => {
            approveSwapToken()
          }}
        >
          Get calldata
        </button>
      </div>
    </div>
  )
}

export default Home
