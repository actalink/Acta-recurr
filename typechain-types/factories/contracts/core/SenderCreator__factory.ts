/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SenderCreator,
  SenderCreatorInterface,
} from "../../../contracts/core/SenderCreator";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "initCode",
        type: "bytes",
      },
    ],
    name: "createSender",
    outputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60808060405234610016576101b6908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c63570e1a361461002857600080fd5b346100ab5760203660031901126100ab5760043567ffffffffffffffff918282116100ab57366023830112156100ab5781600401359283116100ab5736602484840101116100ab576100a761008084602485016100de565b60405173ffffffffffffffffffffffffffffffffffffffff90911681529081906020820190565b0390f35b80fd5b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90806014116101615767ffffffffffffffff916013198201838111610173575b60405193600b8401601f19908116603f0116850190811185821017610166575b60405280845260208401903684840111610161576020946000600c819682946014880187378301015251923560601c5af190600051911561015b57565b60009150565b600080fd5b61016e6100ae565b61011e565b61017b6100ae565b6100fe56fea264697066735822122093cadc705c6e9902fa1e6be2251446df1434187176714a3fc41d23cd35ec39b064736f6c63430008110033";

type SenderCreatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SenderCreatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SenderCreator__factory extends ContractFactory {
  constructor(...args: SenderCreatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SenderCreator> {
    return super.deploy(overrides || {}) as Promise<SenderCreator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SenderCreator {
    return super.attach(address) as SenderCreator;
  }
  override connect(signer: Signer): SenderCreator__factory {
    return super.connect(signer) as SenderCreator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SenderCreatorInterface {
    return new utils.Interface(_abi) as SenderCreatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SenderCreator {
    return new Contract(address, _abi, signerOrProvider) as SenderCreator;
  }
}