/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestSignatureAggregator,
  TestSignatureAggregatorInterface,
} from "../../../contracts/test/TestSignatureAggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "delay",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "struct UserOperation[]",
        name: "userOps",
        type: "tuple[]",
      },
    ],
    name: "aggregateSignatures",
    outputs: [
      {
        internalType: "bytes",
        name: "aggregatedSignature",
        type: "bytes",
      },
    ],
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
        internalType: "struct UserOperation[]",
        name: "userOps",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "validateSignatures",
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
    ],
    name: "validateUserOpSignature",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610515908161001c8239f35b600080fdfe60406080815260048036101561001457600080fd5b600091823560e01c8063275e2d7914610349578063451711591461028957806364c530cd1461020e5763e3563a4f1461004c57600080fd5b3461020a578060031936011261020a5767ffffffffffffffff82358181116101695761007b90369085016103f5565b9190602435918083116102065736602384011215610206578286013590811161020657808301913660248401116102025793879488915b8083106101d65750505060200361016d578160209103126101695760240135036100da578280f35b90602060a492519162461bcd60e51b8352820152604160248201527f546573745369676e617475726556616c696461746f723a20616767726567617460448201527f6564207369676e6174757265206d69736d6174636820286e6f6e63652073756d60648201527f29000000000000000000000000000000000000000000000000000000000000006084820152fd5b8480fd5b608485602086519162461bcd60e51b8352820152602860248201527f546573745369676e617475726556616c696461746f723a20736967206d75737460448201527f2062652075696e740000000000000000000000000000000000000000000000006064820152fd5b9091956101f56101fb9160206101ed8a8688610499565b0135906104d2565b96610474565b91906100b2565b8780fd5b8680fd5b8280fd5b5082903461028557600319916020368401126102825767ffffffffffffffff92843584811161020a5790610160913603011261028257815192602084019081118482101761026d57610269945082528252519182918261042b565b0390f35b604185634e487b7160e01b6000525260246000fd5b80fd5b5080fd5b508060031936011261020a5781359173ffffffffffffffffffffffffffffffffffffffff8316809303610345578360243563ffffffff811680910361028557843b156102855760248451809681937f0396cb600000000000000000000000000000000000000000000000000000000083528683015234905af1801561033b57610310578380f35b67ffffffffffffffff83116103285750523880808380f35b836041602492634e487b7160e01b835252fd5b82513d86823e3d90fd5b8380fd5b5082903461028557602091826003193601126102825767ffffffffffffffff93803585811161020a5761037f90369083016103f5565b83959184915b8083106103d25750505083519481860152845282840194848610908611176103bf575050829052603f19906103ba818461042b565b030190f35b906041602492634e487b7160e01b835252fd5b9091966103e86103ee91856101ed8b8688610499565b97610474565b9190610385565b9181601f840112156104265782359167ffffffffffffffff8311610426576020808501948460051b01011161042657565b600080fd5b6020808252825181830181905290939260005b82811061046057505060409293506000838284010152601f8019910116010190565b81810186015184820160400152850161043e565b60001981146104835760010190565b634e487b7160e01b600052601160045260246000fd5b91908110156104bc5760051b8101359061015e1981360301821215610426570190565b634e487b7160e01b600052603260045260246000fd5b919082018092116104835756fea2646970667358221220dbd5497647460d2eb8cdb3f04cd9306acdf7376d21ab5ea16c89088b8572d21c64736f6c63430008110033";

type TestSignatureAggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestSignatureAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestSignatureAggregator__factory extends ContractFactory {
  constructor(...args: TestSignatureAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestSignatureAggregator> {
    return super.deploy(overrides || {}) as Promise<TestSignatureAggregator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestSignatureAggregator {
    return super.attach(address) as TestSignatureAggregator;
  }
  override connect(signer: Signer): TestSignatureAggregator__factory {
    return super.connect(signer) as TestSignatureAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestSignatureAggregatorInterface {
    return new utils.Interface(_abi) as TestSignatureAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestSignatureAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestSignatureAggregator;
  }
}