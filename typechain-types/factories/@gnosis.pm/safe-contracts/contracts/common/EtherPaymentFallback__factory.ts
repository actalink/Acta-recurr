/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  EtherPaymentFallback,
  EtherPaymentFallbackInterface,
} from "../../../../../@gnosis.pm/safe-contracts/contracts/common/EtherPaymentFallback";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "SafeReceived",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608080604052346013576070908160198239f35b600080fdfe6080806040523615600f57600080fd5b3481527f3d0ce9bfc3ed7d6862dbb28b2dea94561fe714a1b4d019aa8af39730d1ad7c3d60203392a200fea26469706673582212204e23fb61c1311a4a3400c5cb64c248bda53018edcb4ba60ce05e9d03b627509d64736f6c63430008110033";

type EtherPaymentFallbackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EtherPaymentFallbackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EtherPaymentFallback__factory extends ContractFactory {
  constructor(...args: EtherPaymentFallbackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EtherPaymentFallback> {
    return super.deploy(overrides || {}) as Promise<EtherPaymentFallback>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): EtherPaymentFallback {
    return super.attach(address) as EtherPaymentFallback;
  }
  override connect(signer: Signer): EtherPaymentFallback__factory {
    return super.connect(signer) as EtherPaymentFallback__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EtherPaymentFallbackInterface {
    return new utils.Interface(_abi) as EtherPaymentFallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EtherPaymentFallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as EtherPaymentFallback;
  }
}
