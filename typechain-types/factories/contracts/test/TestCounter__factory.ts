/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestCounter,
  TestCounterInterface,
} from "../../../contracts/test/TestCounter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "CalledFrom",
    type: "event",
  },
  {
    inputs: [],
    name: "count",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "countFail",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "counters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "repeat",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "gasWaster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "justemit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "offset",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "xxx",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576102e4908161001c8239f35b600080fdfe6040608081526004908136101561001557600080fd5b600091823560e01c90816306661abd1461023e578163278ddd3c14610200578163a1b4689014610175578163a5e9585f1461014d578163be65ab8c14610104578163caece69314610091575063d55565441461007057600080fd5b3461008d578160031936011261008d576020906002549051908152f35b5080fd5b9050823461010157806003193601126101015750602060649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152600c60248201527f636f756e74206661696c656400000000000000000000000000000000000000006044820152fd5b80fd5b905034610149576020366003190112610149573573ffffffffffffffffffffffffffffffffffffffff8116809103610149578282916020945280845220549051908152f35b8280fd5b9050346101495760203660031901126101495760209282913581526001845220549051908152f35b919050346101495780600319360112610149578135916024359067ffffffffffffffff908183116101fc57366023840112156101fc578201359081116101f85736910160240111610149576001805b838111156101d0578480f35b6101f39060026101e08154610289565b8091558652826020528084872055610289565b6101c4565b8480fd5b8580fd5b50503461008d578160031936011261008d5760207ffb3b4d6258432a9a3d78dd9bffbcb6cfb1bd94f58da35fd530d08da7d1d058329151338152a180f35b919050346101495782600319360112610149573383528260205280832054916001830180931161027657503383528260205282205580f35b836011602492634e487b7160e01b835252fd5b60001981146102985760010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220072f5adb8ee9b4133621b9ca7a07142632b49685b8091de84451d3fd39f3538864736f6c63430008110033";

type TestCounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestCounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestCounter__factory extends ContractFactory {
  constructor(...args: TestCounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestCounter> {
    return super.deploy(overrides || {}) as Promise<TestCounter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestCounter {
    return super.attach(address) as TestCounter;
  }
  override connect(signer: Signer): TestCounter__factory {
    return super.connect(signer) as TestCounter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestCounterInterface {
    return new utils.Interface(_abi) as TestCounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestCounter {
    return new Contract(address, _abi, signerOrProvider) as TestCounter;
  }
}
