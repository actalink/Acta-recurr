import * as React from "react";
import {
  type PublicClient,
  usePublicClient,
  type WalletClient,
  useWalletClient,
} from "wagmi";
import { BigNumber, Signer, ethers, providers } from "ethers";
import { type HttpTransport } from "viem";
import { ERC20__factory } from "../typechain-types";

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

/** Hook to convert a viem Public Client to an ethers.js Provider. */
export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
  const publicClient = usePublicClient({ chainId });
  return React.useMemo(
    () => publicClientToProvider(publicClient),
    [publicClient]
  );
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

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: walletClient } = useWalletClient({ chainId });
  return React.useMemo(
    () => (walletClient ? walletClientToSigner(walletClient) : undefined),
    [walletClient]
  );
}

export const signUserOpVerifyingPaymaster = async (
  userOp: any,
  paymasterUrl: string
): Promise<any> => {
  try {
    const resp = await fetch(paymasterUrl, {
      method: "POST",
      body: JSON.stringify({
        userOp,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const paymasterResp = await resp.json();
    return paymasterResp;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const txnState = (
  state: string,
  stateFns: React.Dispatch<React.SetStateAction<string | undefined>>
) => {
  stateFns(state);
};

export const getTokenInfo = async (
  tokenAddress: string,
  signer: Signer | providers.JsonRpcProvider | providers.FallbackProvider
): Promise<[string, string, number]> => {
  const ERC20 = ERC20__factory.connect(tokenAddress, signer);
  const tokenName = await ERC20.name();
  const tokenSymbol = await ERC20.symbol();
  const tokenDecimal = await ERC20.decimals();
  return [tokenName, tokenSymbol, tokenDecimal];
};

export const getTokenAllowence = async (
  tokenAddress: string,
  signer: Signer,
  spenderAddress: string
) => {
  console.log("getTokenAllowence:: ----->");
  const ERC20 = ERC20__factory.connect(tokenAddress, signer);
  const owner = await signer.getAddress();
  const allowenceAmount = await ERC20.allowance(owner, spenderAddress);
  const tokenDecimal = await ERC20.decimals();
  console.log("getTokenAllowence::allowenceAmount ----->", allowenceAmount);
  return [allowenceAmount, tokenDecimal];
};

export const approveToken = async (
  tokenAddress: string,
  signer: Signer,
  spenderAddress: string,
  amount: BigNumber
) => {
  console.log("approveToken:: ----->");
  console.log("approveToken::tokenAddress ----->", tokenAddress);
  console.log("approveToken::signer ----->", signer);
  const nonce = await signer.getTransactionCount();
  console.log("approveToken::nonce ----->", nonce);
  const ERC20 = ERC20__factory.connect(tokenAddress, signer);
  const tx = await ERC20.approve(spenderAddress, amount);
  console.log("approveToken::tx ----->", tx);
  const txnStatus = (await tx.wait()).status;
  console.log("approveToken::txnStatus ----->", txnStatus);
  return txnStatus;
};
