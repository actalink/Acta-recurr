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
  getSwapQuote,
  getTokenList,
} from '../services/tokenapproval'
import { useAccount } from 'wagmi'
import ConnectModal from '../components/ConnectModal'
import { sendNewTransaction } from '../services/wallet'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Sidebar from './Frequentop'
import Frequentop from './Frequentop'
import Conditionedop from './Conditionedop'

function Home() {
  const { isConnected } = useAccount()
  const { address } = useSmartAccount()
  const provider = useEthersProvider() as ethers.providers.JsonRpcProvider
  const signer = useEthersSigner() as ethers.providers.JsonRpcSigner

  return (
    <div className="relative h-screen w-screen px-10">
      <Navbar smartWallet={address} />
      {/* <Frequentop smartAccountAddress={address} /> */}
      <Conditionedop smartAccountAddress={address} />
    </div>
  )
}

export default Home
