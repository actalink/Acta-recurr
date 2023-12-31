/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ActaTreasury,
  ActaTreasuryInterface,
} from "../../contracts/ActaTreasury";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "amountStaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stakeWithdrawn",
    type: "event",
  },
  {
    inputs: [],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isStaked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    name: "stakeInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "staked",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576103d6908161001c8239f35b600080fdfe6080604081815260048036101561001557600080fd5b600092833560e01c9081631601e6411461034c575080635a627dbc1461023d5780636177fd18146101f15763c60662721461004f57600080fd5b346101ed57816003193601126101ed5780359173ffffffffffffffffffffffffffffffffffffffff83168093036101e9576024918235923386528560205282862080549081156101a75785820391821161019557558580808087895af13d156101905767ffffffffffffffff3d81811161017e57855191601f8201601f19908116603f011683019081118382101761016c57865281528760203d92013e5b1561012b57857f31788ce1126472e8a0029a898facdca3d4615af224c1d38a906b1e686b1c1f1860608787878051923384526020840152820152a180f35b6018906020606494519362461bcd60e51b85528401528201527f6661696c656420746f207769746864726177207374616b6500000000000000006044820152fd5b848a604188634e487b7160e01b835252fd5b8389604187634e487b7160e01b835252fd5b6100ed565b8288601186634e487b7160e01b835252fd5b606484601485602089519362461bcd60e51b85528401528201527f6e6f207374616b6520746f2077697468647261770000000000000000000000006044820152fd5b8380fd5b8280fd5b50346101ed5760203660031901126101ed573573ffffffffffffffffffffffffffffffffffffffff81168091036101ed576001828460ff93602096528086522001541690519015158152f35b509190816003193601126103485733825281602052808220543481018091116103355780156102f257815182810181811067ffffffffffffffff8211176102df577f1593e395a448197c0974636284c609e0a9ae62ca1dae42931b356de563c17f169495508352818152600160208201918183523387528660205284872090518155019051151560ff801983541691161790558151903382526020820152a180f35b602485604188634e487b7160e01b835252fd5b606484602084519162461bcd60e51b8352820152600860248201527f6e6f207374616b650000000000000000000000000000000000000000000000006044820152fd5b602483601186634e487b7160e01b835252fd5b5080fd5b9184915034610348576020366003190112610348573573ffffffffffffffffffffffffffffffffffffffff8116809103610348579083918152806020522060ff600182549201541690825215156020820152f3fea2646970667358221220eee566962f1d5fc18c814366bbae9858666b07c4004c99ae58954a8d31bf8d0564736f6c63430008110033";

type ActaTreasuryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ActaTreasuryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ActaTreasury__factory extends ContractFactory {
  constructor(...args: ActaTreasuryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ActaTreasury> {
    return super.deploy(overrides || {}) as Promise<ActaTreasury>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ActaTreasury {
    return super.attach(address) as ActaTreasury;
  }
  override connect(signer: Signer): ActaTreasury__factory {
    return super.connect(signer) as ActaTreasury__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ActaTreasuryInterface {
    return new utils.Interface(_abi) as ActaTreasuryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ActaTreasury {
    return new Contract(address, _abi, signerOrProvider) as ActaTreasury;
  }
}
