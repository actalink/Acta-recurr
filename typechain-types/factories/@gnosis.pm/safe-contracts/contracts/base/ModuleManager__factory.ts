/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ModuleManager,
  ModuleManagerInterface,
} from "../../../../../@gnosis.pm/safe-contracts/contracts/base/ModuleManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "DisabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "EnabledModule",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleFailure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "ExecutionFromModuleSuccess",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prevModule",
        type: "address",
      },
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "disableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "enableModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModule",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum Enum.Operation",
        name: "operation",
        type: "uint8",
      },
    ],
    name: "execTransactionFromModuleReturnData",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "start",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "pageSize",
        type: "uint256",
      },
    ],
    name: "getModulesPaginated",
    outputs: [
      {
        internalType: "address[]",
        name: "array",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "next",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "isModuleEnabled",
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
] as const;

const _bytecode =
  "0x608080604052346100165761094e908161001c8239f35b600080fdfe60806040526004361015610013575b600080fd5b6000803560e01c9081632d9ad53d1461008e57508063468721a7146100855780635229073f1461007c578063610b592514610073578063cc2f84521461006a5763e009cfde1461006257600080fd5b61000e610598565b5061000e61049a565b5061000e6102a5565b5061000e610222565b5061000e6101fb565b346100e25760203660031901126100e2576001600160a01b03806100b06100e5565b1691826001141592836100ca575b83151560805260206080f35b604092935081528060205220541615158180806100be565b80fd5b600435906001600160a01b038216820361000e57565b602435906001600160a01b038216820361000e57565b50634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f1916820167ffffffffffffffff81118382101761014e57604052565b610156610111565b604052565b60643590600282101561000e57565b608060031982011261000e5761017e6100e5565b916024359167ffffffffffffffff60443581811161000e578260238201121561000e5780600401359182116101ee575b6101c1601f8301601f1916602001610128565b928284526024838301011161000e57816000926024602093018386013783010152906101eb61015b565b90565b6101f6610111565b6101ae565b503461000e57602061021861020f3661016a565b92919091610735565b6040519015158152f35b503461000e5761023461020f3661016a565b604051602091823d8301016040523d82523d60008484013e604051928391151582526040818301528251908160408401526000935b82851061028c575050606092506000838284010152601f80199101168101030190f35b8481018201518686016060015293810193859350610269565b503461000e57602036600319011261000e576102bf6100e5565b6102c76108cb565b6001600160a01b0380821680151580610438575b6102e4906106ea565b6000526000602052604060002054166103f457600160009081526020527fecdf3a3effea5783a3c4c2140e677577666428d44ed9d474a0b3a4c9943f8440906103ef906103a161035c7fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d5b546001600160a01b031690565b610379836001600160a01b03166000526000602052604060002090565b906001600160a01b031673ffffffffffffffffffffffffffffffffffffffff19825416179055565b600160009081526020526103d5817fada5013122d395ba3c54772283fb069b10426056ef8ca54750cb9bb552a59e7d610379565b6040516001600160a01b0390911681529081906020820190565b0390a1005b606460405162461bcd60e51b815260206004820152600560248201527f47533130320000000000000000000000000000000000000000000000000000006044820152fd5b5060018114156102db565b90929192604082016040835281518091526060830160208093019160005b8482821061047d575050506001600160a01b0391509416910152565b84516001600160a01b031684529384019390920191600101610461565b503461000e57604036600319011261000e576104b46100e5565b602435906104c96104c483610855565b610128565b828152601f196104d884610855565b013660208301376000926001600160a01b03809316845283602052610508604085206001600160a01b0390541690565b838116801515908161058c575b5080610583575b1561056c5761056061034f82610547610566946105398a8961087c565b906001600160a01b03169052565b6001600160a01b03166000526000602052604060002090565b946108a6565b93610508565b8285815261057f60405192839283610443565b0390f35b5081851061051c565b60019150141538610515565b503461000e57604036600319011261000e576105b26100e5565b6105ba6100fb565b906105c36108cb565b6001600160a01b0380831690811515806106df575b6105e1906106ea565b8083166000526000602052604060002054160361069b578161065e6103ef9261037961064461034f7faab4fa2b463f581b2b32cb3b7e3b704b9ce37cc209b5fb4d77e593ace4054276976001600160a01b03166000526000602052604060002090565b916001600160a01b03166000526000602052604060002090565b6103d561067e826001600160a01b03166000526000602052604060002090565b73ffffffffffffffffffffffffffffffffffffffff198154169055565b606460405162461bcd60e51b815260206004820152600560248201527f47533130330000000000000000000000000000000000000000000000000000006044820152fd5b5060018214156105d8565b156106f157565b606460405162461bcd60e51b815260206004820152600560248201527f47533130310000000000000000000000000000000000000000000000000000006044820152fd5b919290926001331415806107ef575b156107ab57610754935a9361080f565b90811561078357337f6895c13664aa4f67288b25d7a21d7aaa34916e355fb9b6fae0a139a9085becb8600080a2565b337facd2c8702804128fdb0db2bb49f6d127dd0181c13fd45dbfe16de0930e2bd375600080a2565b606460405162461bcd60e51b815260206004820152600560248201527f47533130340000000000000000000000000000000000000000000000000000006044820152fd5b503360005260006020526001600160a01b03604060002054161515610744565b939093600284101561083f576000948594600103610833575060208351930191f490565b9060208451940192f190565b634e487b7160e01b600052602160045260246000fd5b60209067ffffffffffffffff811161086f575b60051b0190565b610877610111565b610868565b80518210156108905760209160051b010190565b634e487b7160e01b600052603260045260246000fd5b60001981146108b55760010190565b634e487b7160e01b600052601160045260246000fd5b3033036108d457565b606460405162461bcd60e51b815260206004820152600560248201527f47533033310000000000000000000000000000000000000000000000000000006044820152fdfea2646970667358221220cae37936f1ba838b82e58f12430865ecf324bebf7be40de146fb99c13f44b30564736f6c63430008110033";

type ModuleManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ModuleManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ModuleManager__factory extends ContractFactory {
  constructor(...args: ModuleManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ModuleManager> {
    return super.deploy(overrides || {}) as Promise<ModuleManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ModuleManager {
    return super.attach(address) as ModuleManager;
  }
  override connect(signer: Signer): ModuleManager__factory {
    return super.connect(signer) as ModuleManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ModuleManagerInterface {
    return new utils.Interface(_abi) as ModuleManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ModuleManager {
    return new Contract(address, _abi, signerOrProvider) as ModuleManager;
  }
}
