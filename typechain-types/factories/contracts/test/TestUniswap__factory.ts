/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestUniswap,
  TestUniswapInterface,
} from "../../../contracts/test/TestUniswap";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract TestWrappedNativeToken",
        name: "_weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
    ],
    name: "StubUniswapExchangeEvent",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOutMinimum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct ISwapRouter.ExactInputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactInputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInMaximum",
            type: "uint256",
          },
          {
            internalType: "uint160",
            name: "sqrtPriceLimitX96",
            type: "uint160",
          },
        ],
        internalType: "struct ISwapRouter.ExactOutputSingleParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "exactOutputSingle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountMinimum",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "unwrapWETH9",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
    outputs: [
      {
        internalType: "contract TestWrappedNativeToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60803461007457601f61068a38819003918201601f19168301916001600160401b038311848410176100795780849260209460405283398101031261007457516001600160a01b0381169081900361007457600080546001600160a01b0319169190911790556040516105fa90816100908239f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060409080825260049182361015610023575b505050361561002157600080fd5b005b600091823560e01c9081633fc8cef31461050a57508063414bf3891461040c57806349404b7c146102305763db3e219803610013573461022c5761010036600319011261022c5760c4359160041983019283116102195760a4357f29a1b057b49189ad91f5d92216fc55e37caf33e398f9e914469523c9aa5f6a036100a661052d565b6100ae610548565b8551878152602081018590526001600160a01b03928316604082015291166060820152608090a16001600160a01b0394856100e761052d565b1695845180976323b872dd60e01b8252602098899181888161012b8d30338c85016040919493929460608201956001600160a01b0380921683521660208201520152565b03925af1801561020f57918893916101a29695936101f2575b5061014d610548565b16908461015861055e565b918851978895869485937fa9059cbb0000000000000000000000000000000000000000000000000000000085528401602090939291936001600160a01b0360408201951681520152565b03925af19081156101e757506101ba575b5051908152f35b6101d990843d86116101e0575b6101d18183610574565b8101906105ac565b50386101b3565b503d6101c7565b8351903d90823e3d90fd5b61020890853d87116101e0576101d18183610574565b5038610144565b86513d87823e3d90fd5b80601185634e487b7160e01b6024945252fd5b5080fd5b508281600319360112610366576024356001600160a01b03808216809203610408578454168351927f70a082310000000000000000000000000000000000000000000000000000000084523081850152602084602481855afa9384156103fe5786946103c7575b508035841061036a57859084159283156102af578280f35b803b1561036657829060248851809581937f2e1a7d4d0000000000000000000000000000000000000000000000000000000083528a878401525af1801561035c57610328575b505084809381938293839061031f575bf115610315578080808481808280f35b51903d90823e3d90fd5b506108fc610305565b67ffffffffffffffff829793949597116103495750845293919085806102f5565b826041602492634e487b7160e01b835252fd5b86513d89823e3d90fd5b8280fd5b60649060208651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601260248201527f496e73756666696369656e7420574554483900000000000000000000000000006044820152fd5b9093506020813d82116103f6575b816103e260209383610574565b810103126103f257519286610297565b8580fd5b3d91506103d5565b85513d88823e3d90fd5b8480fd5b503461022c5761010036600319011261022c5760c4359160058301809311610219576104df9360a4357f29a1b057b49189ad91f5d92216fc55e37caf33e398f9e914469523c9aa5f6a0361045e61052d565b610466610548565b8651848152602081018990526001600160a01b03928316604082015291166060820152608090a16001600160a01b03908161049f61052d565b1690855180926323b872dd60e01b825281878160209c8d9630338c85016040919493929460608201956001600160a01b0380921683521660208201520152565b03925af180156105005792879287926101a296956101f2575061014d610548565b85513d86823e3d90fd5b83903461022c578160031936011261022c576001600160a01b0360209254168152f35b6004356001600160a01b03811681036105435790565b600080fd5b6024356001600160a01b03811681036105435790565b6064356001600160a01b03811681036105435790565b90601f8019910116810190811067ffffffffffffffff82111761059657604052565b634e487b7160e01b600052604160045260246000fd5b9081602091031261054357518015158103610543579056fea26469706673582212208a43bbd33ca0e7dee4f8e19a4a4abcff65ef74276633e05543e1148c0f0bc06464736f6c63430008110033";

type TestUniswapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestUniswapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestUniswap__factory extends ContractFactory {
  constructor(...args: TestUniswapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestUniswap> {
    return super.deploy(_weth, overrides || {}) as Promise<TestUniswap>;
  }
  override getDeployTransaction(
    _weth: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_weth, overrides || {});
  }
  override attach(address: string): TestUniswap {
    return super.attach(address) as TestUniswap;
  }
  override connect(signer: Signer): TestUniswap__factory {
    return super.connect(signer) as TestUniswap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestUniswapInterface {
    return new utils.Interface(_abi) as TestUniswapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestUniswap {
    return new Contract(address, _abi, signerOrProvider) as TestUniswap;
  }
}