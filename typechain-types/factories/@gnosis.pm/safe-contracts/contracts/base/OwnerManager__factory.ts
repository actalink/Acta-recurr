/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  OwnerManager,
  OwnerManagerInterface,
} from "../../../../../@gnosis.pm/safe-contracts/contracts/base/OwnerManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "AddedOwner",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "threshold",
        type: "uint256",
      },
    ],
    name: "ChangedThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "RemovedOwner",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "addOwnerWithThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "changeThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwners",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getThreshold",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "isOwner",
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
        name: "prevOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
    ],
    name: "removeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "swapOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576108e2908161001c8239f35b600080fdfe60406080815260048036101561001457600080fd5b600091823560e01c80630d582f13146105b45780632f54bf6e1461055d578063694e80c3146104f8578063a0e67e2b146103c4578063e318b52b14610262578063e75235b81461023f5763f8dc5dd91461006d57600080fd5b3461023b57606036600319011261023b576100866106af565b9161008f6106ca565b926044359361009c61085f565b600154600019919082810190811161022857866100ba91101561079b565b6001600160a01b0380809216938415158061021d575b6100d9906106e0565b1690818852876020526100f28482888b205416146107e6565b83885287602052858820541690875284872073ffffffffffffffffffffffffffffffffffffffff199182825416179055828752848720908154169055600154801561020a577ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf916020910192836001558551908152a18360025403610175578480f35b6101899061018161085f565b84111561079b565b600183106101c85750816020917f610f7ff2b304ae8903c3de74c60c6ab1f7d6226b3f52c5161905bb5ad4039c939360025551908152a1388080808480f35b6020606492519162461bcd60e51b8352820152600560248201527f47533230320000000000000000000000000000000000000000000000000000006044820152fd5b602487601186634e487b7160e01b835252fd5b5060018514156100d0565b602488601187634e487b7160e01b835252fd5b8280fd5b83823461025e578160031936011261025e576020906002549051908152f35b5080fd5b83823461025e57606036600319011261025e5761027d6106af565b906102866106ca565b90604435906001600160a01b0392858484168094036103c1577f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea26958580807ff8d49fc529812e9a7c5c50e69c20f0dccc0db8fa95c98bc58cc9a4f1c1299eaf9561031e60209a898c986102f761085f565b8c1515806103b6575b806103ac575b61030f906106e0565b8c8152808a522054161561072b565b1692831515806103a1575b610332906106e0565b1690818a5289845261034a8382888d205416146107e6565b828a52898452858a20541690868a52858a2073ffffffffffffffffffffffffffffffffffffffff199283825416179055895284892086828254161790558189528489209081541690558351908152a151908152a180f35b506001841415610329565b50308d1415610306565b5060018d1415610300565b80fd5b50903461023b578260031936011261023b57600192601f8454916103e783610831565b9285519383199384910116840184811067ffffffffffffffff8211176104e5579261041a87959289958752808452610831565b95602091828401970136883783908585528483526001600160a01b039186838988205416905b610480575b505050855195828701938388525180945286019693905b8382106104695786880387f35b84518116885296820196938201939085019061045c565b969896949593948316808a146104d95786518210156104c65790818a92878360051b8a01015285528486526104ba848a8720541691610776565b91979996959496610440565b602485603285634e487b7160e01b835252fd5b98969895949395610445565b602483604188634e487b7160e01b835252fd5b503461023b57602036600319011261023b5781359161051561085f565b61052360015484111561079b565b600183106101c85750816020917f610f7ff2b304ae8903c3de74c60c6ab1f7d6226b3f52c5161905bb5ad4039c939360025551908152a180f35b83823461025e57602036600319011261025e576020916001600160a01b03806105846106af565b16916001831415928361059e575b50505090519015158152f35b8492935081528085522054161515838080610592565b503461023b578060031936011261023b576105cd6106af565b91602435926105da61085f565b6001600160a01b0380911690811515806106a4575b8061069a575b6105fe906106e0565b818652856020526106148185882054161561072b565b6001865285602052838620541681865283862073ffffffffffffffffffffffffffffffffffffffff1991828254161790556001865281848720918254161790557f9465fa0c962cc76958e6373a993326400c1c94f8be2fe3a952adfa7f60b2ea266020610682600154610776565b92836001558551908152a18360025403610175578480f35b50308214156105f5565b5060018214156105ef565b600435906001600160a01b03821682036106c557565b600080fd5b602435906001600160a01b03821682036106c557565b156106e757565b606460405162461bcd60e51b815260206004820152600560248201527f47533230330000000000000000000000000000000000000000000000000000006044820152fd5b1561073257565b606460405162461bcd60e51b815260206004820152600560248201527f47533230340000000000000000000000000000000000000000000000000000006044820152fd5b60001981146107855760010190565b634e487b7160e01b600052601160045260246000fd5b156107a257565b606460405162461bcd60e51b815260206004820152600560248201527f47533230310000000000000000000000000000000000000000000000000000006044820152fd5b156107ed57565b606460405162461bcd60e51b815260206004820152600560248201527f47533230350000000000000000000000000000000000000000000000000000006044820152fd5b67ffffffffffffffff81116108495760051b60200190565b634e487b7160e01b600052604160045260246000fd5b30330361086857565b606460405162461bcd60e51b815260206004820152600560248201527f47533033310000000000000000000000000000000000000000000000000000006044820152fdfea2646970667358221220845b50f12834e2e41473e1387de877484a78b56814ab0e7c7e54728830ab994964736f6c63430008110033";

type OwnerManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnerManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnerManager__factory extends ContractFactory {
  constructor(...args: OwnerManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OwnerManager> {
    return super.deploy(overrides || {}) as Promise<OwnerManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OwnerManager {
    return super.attach(address) as OwnerManager;
  }
  override connect(signer: Signer): OwnerManager__factory {
    return super.connect(signer) as OwnerManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnerManagerInterface {
    return new utils.Interface(_abi) as OwnerManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnerManager {
    return new Contract(address, _abi, signerOrProvider) as OwnerManager;
  }
}