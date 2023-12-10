import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import {
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit'
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets'
import type { AppProps } from 'next/app'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { hardhat, goerli, polygonMumbai, mainnet, polygon } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import NoSsrWrapper from './no-ssr-wrapper'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sidebar from './Frequentop'

const goerliPrivate = {
  ...goerli,
  namespace: 'private',
  rpcUrls: {
    default: {
      http: [
        `https://eth-goerli.g.alchemy.com/v2/${process.env
          .NEXT_PUBLIC_ALCHEMY_KEY!}`,
      ],
    },
    public: {
      http: [
        `https://eth-goerli.g.alchemy.com/v2/${process.env
          .NEXT_PUBLIC_ALCHEMY_KEY!}`,
      ],
    },
  },
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    // goerli,
    goerliPrivate,
    polygon,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
)

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains, projectId: '9872e33ca0cd8ecb63cf1f57720135f4' }),
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

function ActaDapp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <NoSsrWrapper>
            <Component {...pageProps} />
          </NoSsrWrapper>
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  )
}

export default ActaDapp
