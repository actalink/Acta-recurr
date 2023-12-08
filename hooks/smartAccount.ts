import { SimpleAccountAPI } from "actasdk/packages/sdk/dist/src/account/SimpleAccountAPI";
import { getPaymaster } from "actasdk/packages/sdk/dist/src/paymaster";
import * as React from 'react'
import { type PublicClient, type WalletClient, usePublicClient, useWalletClient } from 'wagmi'
import { providers } from 'ethers'
import { type HttpTransport } from 'viem'
import useAsync from './useAsync';

const paymasterURL = process.env.NEXT_PUBLIC_PAYMASTER_URL as string;
const bundlerURL = process.env.NEXT_PUBLIC_BUNDLER_URL as string;
const entryPointAddress = process.env.NEXT_PUBLIC_ENTRY_POINT as string;
const factoryAddress = process.env.NEXT_PUBLIC_ACCOUNT_FACTORY as string;
const executionParamsUrl = process.env.NEXT_PUBLIC_EXECUTOR_URL as string;

export function publicClientToProvider(publicClient: PublicClient) {
  const { chain, transport } = publicClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === "fallback")
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<HttpTransport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network)
      )
    );
  return new providers.JsonRpcProvider(transport.url, network);
}

export function walletClientToSigner(walletClient: WalletClient) {
  const { account, chain, transport } = walletClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new providers.Web3Provider(transport, network);
  const signer = provider.getSigner(account.address);
  return signer;
}

/** Hook to convert a viem Public Client to an ethers.js Provider. */
export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
  const publicClient = usePublicClient({ chainId });
  return React.useMemo(
    () => publicClientToProvider(publicClient),
    [publicClient]
  );
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: walletClient } = useWalletClient({ chainId });
  return React.useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient]
  );
}

export const useSmartAccount = () => {
  const provider = useEthersProvider();
  const signer = useEthersSigner();
  const { value: paymaster } = useAsync(async () => {
    const paymaster = await getPaymaster(paymasterURL);
    return paymaster;
  });
  const api = React.useMemo(
    () =>
      new SimpleAccountAPI({
        owner: signer!,
        provider: provider,
        entryPointAddress: entryPointAddress,
        factoryAddress: factoryAddress,
        paymasterAPI: paymaster,
      }),
    [paymaster, provider, signer]
  );
  const {
    loading,
    error,
    value: account,
  } = useAsync(async () => {
    const address = await api.getAccountAddress();
    const initcode = await api.getInitCode();
    return { address, initcode };
  }, [api.owner]);

  if (account) {
    return {
      api,
      address: account.address,
      initcode: account.initcode,
      loading,
      error,
    };
  }
  return { api, address: "", initcode: "", loading, error };
};
