/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestUtil,
  TestUtilInterface,
} from "../../../contracts/test/TestUtil";

const _abi = [
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
        name: "op",
        type: "tuple",
      },
    ],
    name: "packUserOp",
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
  "0x6080806040523461001657610259908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c633a24dea41461002857600080fd5b346101435760031990602036830112610143576004359067ffffffffffffffff82116101435761016082600401938336030112610143575061013361013f9261012561008061007a604486018461018f565b90610218565b9361009161007a606483018561018f565b906100a361007a61012483018661018f565b60408051953573ffffffffffffffffffffffffffffffffffffffff16602087015260248301359086015260608501969096526080840191909152608481013560a084015260a481013560c084015260c481013560e084015260e48101356101008401526101040135610120830152610140820193909352918290610160820190565b03601f1981018352826101c7565b60405191829182610146565b0390f35b80fd5b6020808252825181830181905290939260005b82811061017b57505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501610159565b903590601e19813603018212156101c2570180359067ffffffffffffffff82116101c2576020019181360383136101c257565b600080fd5b90601f8019910116810190811067ffffffffffffffff8211176101e957604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b81604051918237209056fea2646970667358221220603af25405f5b81ee26365722b862a10cee9e1955112f2fc87e4daec3d2a534564736f6c63430008110033";

type TestUtilConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestUtilConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestUtil__factory extends ContractFactory {
  constructor(...args: TestUtilConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestUtil> {
    return super.deploy(overrides || {}) as Promise<TestUtil>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestUtil {
    return super.attach(address) as TestUtil;
  }
  override connect(signer: Signer): TestUtil__factory {
    return super.connect(signer) as TestUtil__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUtilInterface {
    return new utils.Interface(_abi) as TestUtilInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUtil {
    return new Contract(address, _abi, signerOrProvider) as TestUtil;
  }
}
