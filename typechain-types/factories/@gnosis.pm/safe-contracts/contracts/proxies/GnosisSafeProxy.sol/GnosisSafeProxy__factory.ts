/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  GnosisSafeProxy,
  GnosisSafeProxyInterface,
} from "../../../../../../@gnosis.pm/safe-contracts/contracts/proxies/GnosisSafeProxy.sol/GnosisSafeProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_singleton",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
] as const;

const _bytecode =
  "0x6080346100c957601f61018438819003918201601f19168301916001600160401b038311848410176100ce578084926020946040528339810103126100c957516001600160a01b038116908190036100c957801561007957600080546001600160a01b031916919091179055604051609f90816100e58239f35b60405162461bcd60e51b815260206004820152602260248201527f496e76616c69642073696e676c65746f6e20616464726573732070726f766964604482015261195960f21b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600073ffffffffffffffffffffffffffffffffffffffff815416907fa619486e00000000000000000000000000000000000000000000000000000000813514606257808092368280378136915af43d82803e15605e573d90f35b3d90fd5b6020918152f3fea2646970667358221220fcf5bc1efa9924c6b183c525f5e36591be2c895e63a298d726af5a3c501ca0ee64736f6c63430008110033";

type GnosisSafeProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GnosisSafeProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GnosisSafeProxy__factory extends ContractFactory {
  constructor(...args: GnosisSafeProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _singleton: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GnosisSafeProxy> {
    return super.deploy(
      _singleton,
      overrides || {}
    ) as Promise<GnosisSafeProxy>;
  }
  override getDeployTransaction(
    _singleton: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_singleton, overrides || {});
  }
  override attach(address: string): GnosisSafeProxy {
    return super.attach(address) as GnosisSafeProxy;
  }
  override connect(signer: Signer): GnosisSafeProxy__factory {
    return super.connect(signer) as GnosisSafeProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GnosisSafeProxyInterface {
    return new utils.Interface(_abi) as GnosisSafeProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GnosisSafeProxy {
    return new Contract(address, _abi, signerOrProvider) as GnosisSafeProxy;
  }
}
