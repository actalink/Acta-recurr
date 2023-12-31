/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestRevertAccount,
  TestRevertAccountInterface,
} from "../../../contracts/test/TestRevertAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_ep",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "revertLong",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080601f6101de38819003918201601f19168301916001600160401b038311848410176100745780849260209460405283398101031261006f57516001600160a01b0381169081900361006f57600080546001600160a01b031916919091179055604051610153908161008b8239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040526004361015610013575b600080fd5b6000803560e01c9081633a871cdd1461003e575063be76c6ef1461003657600080fd5b61000e610104565b346100f957600319606036820112610100576004359067ffffffffffffffff82116100fc5761016091360301126100f9578073ffffffffffffffffffffffffffffffffffffffff815416803b156100f6576024608080927fb760faf900000000000000000000000000000000000000000000000000000000825230608452604435905af19081156100ea57506100db575b60405160008152602090f35b6100e56080604052565b6100cf565b604051903d90823e3d90fd5b50fd5b80fd5b8280fd5b5080fd5b503461000e57602036600319011261000e576004356000fdfea264697066735822122021115e25812d3f558da42a7ecc1a24d13416d0b77735972a5f09c1372b0d3f9b64736f6c63430008110033";

type TestRevertAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestRevertAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestRevertAccount__factory extends ContractFactory {
  constructor(...args: TestRevertAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ep: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<TestRevertAccount> {
    return super.deploy(_ep, overrides || {}) as Promise<TestRevertAccount>;
  }
  override getDeployTransaction(
    _ep: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ep, overrides || {});
  }
  override attach(address: string): TestRevertAccount {
    return super.attach(address) as TestRevertAccount;
  }
  override connect(signer: Signer): TestRevertAccount__factory {
    return super.connect(signer) as TestRevertAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestRevertAccountInterface {
    return new utils.Interface(_abi) as TestRevertAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestRevertAccount {
    return new Contract(address, _abi, signerOrProvider) as TestRevertAccount;
  }
}
