/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestExpiryAccount,
  TestExpiryAccountInterface,
} from "../../../contracts/test/TestExpiryAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
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
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SimpleAccountInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "_after",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "_until",
        type: "uint48",
      },
    ],
    name: "addTemporaryOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    name: "callerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
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
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
    inputs: [],
    name: "getNonce",
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
        name: "anOwner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
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
        name: "",
        type: "address",
      },
    ],
    name: "ownerAfter",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
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
    name: "ownerUntil",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
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
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
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
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c0346100b657601f611e1138819003918201601f19168301916001600160401b038311848410176100bb578084926020946040528339810103126100b657516001600160a01b03811681036100b6573060805260a052604051611d3f90816100d2823960805181818161050001528181610b000152610c7f015260a0518181816106c30152818161087e0152818161093c01528181610db701528181610f47015281816112050152818161181201526119f00152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806223de29146101d257806301ffc9a7146101c9578063150b7a02146101c057806318dfb3c7146101b75780633659cfe6146101ae5780633a871cdd146101a55780633e4769511461019c5780633fb5a7a1146101935780634a58db191461018a5780634d44560d146101815780634f1ef2861461017857806352d1902d1461016f57806357d95c43146101665780638da5cb5b1461015d578063b0d691fe14610154578063b61d27f61461014b578063bc197c8114610142578063c399ec8814610139578063c4d66de814610130578063cf6dca5514610127578063d087d2881461011e5763f23a6e610361000e57610119611273565b61000e565b506101196111ad565b506101196110c4565b50610119610fac565b50610119610ef8565b50610119610e4e565b50610119610ddb565b50610119610d96565b50610119610d6b565b50610119610d3a565b50610119610c63565b50610119610aa9565b50610119610908565b50610119610866565b5061011961081f565b506101196107d8565b50610119610684565b506101196104d6565b506101196103d3565b50610119610347565b5061011961028d565b5061011961021f565b6001600160a01b038116036101ec57565b600080fd5b9181601f840112156101ec5782359167ffffffffffffffff83116101ec57602083818601950101116101ec57565b50346101ec5760c03660031901126101ec5761023c6004356101db565b6102476024356101db565b6102526044356101db565b67ffffffffffffffff6084358181116101ec576102739036906004016101f1565b505060a4359081116101ec576100199036906004016101f1565b50346101ec5760203660031901126101ec576004357fffffffff0000000000000000000000000000000000000000000000000000000081168091036101ec5780630a85bd0160e11b6020921490811561031d575b81156102f3575b506040519015158152f35b7f01ffc9a700000000000000000000000000000000000000000000000000000000915014386102e8565b7f4e2312e000000000000000000000000000000000000000000000000000000000811491506102e1565b50346101ec5760803660031901126101ec576103646004356101db565b61036f6024356101db565b60643567ffffffffffffffff81116101ec5761038f9036906004016101f1565b50506020604051630a85bd0160e11b8152f35b9181601f840112156101ec5782359167ffffffffffffffff83116101ec576020808501948460051b0101116101ec57565b50346101ec5760403660031901126101ec5767ffffffffffffffff600480358281116101ec5761040690369083016103a2565b60249291929384359081116101ec5761042290369084016103a2565b61042a611807565b8083036104935760005b83811061043d57005b61046e61045361044e83878a611782565b6117a0565b6104686104618486886117dd565b3691610a72565b90611899565b600019811461047f57600101610434565b86601186634e487b7160e01b600052526000fd5b60648460138860206040519362461bcd60e51b85528401528201527f77726f6e67206172726179206c656e67746873000000000000000000000000006044820152fd5b50346101ec5760203660031901126101ec576004356104f4816101db565b6001600160a01b0390817f0000000000000000000000000000000000000000000000000000000000000000169161052d833014156112e7565b61055c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc938285541614611358565b6105646118b9565b60405190610571826109ed565b600082527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156105ab5750506100199150611456565b6020600491604094939451928380926352d1902d60e01b825286165afa60009181610654575b506106415760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b6100199361064f91146113e5565b61151b565b61067691925060203d811161067d575b61066e8183610a25565b8101906113c9565b90386105d1565b503d610664565b50346101ec576003196060368201126101ec576004359067ffffffffffffffff82116101ec576101609082360301126101ec576001600160a01b0390817f00000000000000000000000000000000000000000000000000000000000000001633036107945761073a610742917f19457468657265756d205369676e6564204d6573736167653a0a333200000000600052602435601c52610734610461603c600020926101448101906004016117aa565b90611bc4565b919091611a89565b16600052600260205261079061077565ffffffffffff806040600020541690600160205260406000205416908015611c88565b610780604435611750565b6040519081529081906020820190565b0390f35b606460405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152fd5b50346101ec5760203660031901126101ec576001600160a01b036004356107fe816101db565b166000526002602052602065ffffffffffff60406000205416604051908152f35b50346101ec5760203660031901126101ec576001600160a01b03600435610845816101db565b166000526001602052602065ffffffffffff60406000205416604051908152f35b50600080600319360112610905576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681813b1561090557602491604051928380927fb760faf900000000000000000000000000000000000000000000000000000000825230600483015234905af180156108f8575b6108ec575080f35b6108f5906109cc565b80f35b6109006113d8565b6108e4565b80fd5b50346101ec576000604036600319011261090557600435610928816101db565b6109306118b9565b816001600160a01b03807f00000000000000000000000000000000000000000000000000000000000000001692833b156109b1576044908360405195869485937f205c287800000000000000000000000000000000000000000000000000000000855216600484015260243560248401525af180156108f8576108ec575080f35b8280fd5b50634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff81116109e057604052565b6109e86109b5565b604052565b6020810190811067ffffffffffffffff8211176109e057604052565b6060810190811067ffffffffffffffff8211176109e057604052565b90601f8019910116810190811067ffffffffffffffff8211176109e057604052565b60209067ffffffffffffffff8111610a65575b601f01601f19160190565b610a6d6109b5565b610a5a565b929192610a7e82610a47565b91610a8c6040519384610a25565b8294818452818301116101ec578281602093846000960137010152565b5060403660031901126101ec57600435610ac2816101db565b60243567ffffffffffffffff81116101ec57366023820112156101ec57610af3903690602481600401359101610a72565b906001600160a01b0391827f00000000000000000000000000000000000000000000000000000000000000001692610b2d843014156112e7565b610b5c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc948286541614611358565b610b646118b9565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610b9a5750506100199150611456565b6020600491604094939451928380926352d1902d60e01b825286165afa60009181610c43575b50610c305760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b61001993610c3e91146113e5565b6115ed565b610c5c91925060203d811161067d5761066e8183610a25565b9038610bc0565b50346101ec5760003660031901126101ec576001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003610cd0576040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152602090f35b608460405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152fd5b50346101ec5760203660031901126101ec576020600435610d5a816101db565b6001600160a01b0360405191168152f35b50346101ec5760003660031901126101ec5760206001600160a01b0360005460101c16604051908152f35b50346101ec5760003660031901126101ec5760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346101ec5760603660031901126101ec57600435610df9816101db565b60443567ffffffffffffffff81116101ec57600091610e28610e20849336906004016101f1565b610461611807565b9060208251920190602435905af1610e3e611640565b9015610e4657005b602081519101fd5b50346101ec5760a03660031901126101ec57610e6b6004356101db565b610e766024356101db565b67ffffffffffffffff6044358181116101ec57610e979036906004016103a2565b50506064358181116101ec57610eb19036906004016103a2565b50506084359081116101ec57610ecb9036906004016101f1565b50506040517fbc197c81000000000000000000000000000000000000000000000000000000008152602090f35b50346101ec5760003660031901126101ec5760206040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281816024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115610f9f575b600091610f82575b50604051908152f35b610f999150823d811161067d5761066e8183610a25565b38610f79565b610fa76113d8565b610f71565b50346101ec5760203660031901126101ec57600435610fca816101db565b61100e60005491610ff260ff8460081c16158094819561108c575b811561106c575b50611925565b82611005600160ff196000541617600055565b61105357611996565b61101457005b61102461ff001960005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a1005b61106761010061ff00196000541617600055565b611996565b303b1591508161107e575b5038610fec565b6001915060ff161438611077565b600160ff8216109150610fe5565b6024359065ffffffffffff821682036101ec57565b6044359065ffffffffffff821682036101ec57565b50346101ec5760603660031901126101ec576004356110e2816101db565b6110ea61109a565b906110f36110af565b906110fc6118b9565b65ffffffffffff808416908316111561116957610019926001600160a01b036111469216600052600160205260406000209065ffffffffffff1665ffffffffffff19825416179055565b600260205260406000209065ffffffffffff1665ffffffffffff19825416179055565b606460405162461bcd60e51b815260206004820152601160248201527f77726f6e6720756e74696c2f61667465720000000000000000000000000000006044820152fd5b50346101ec5760003660031901126101ec576107906040517f35567e1a000000000000000000000000000000000000000000000000000000008152306004820152600060248201526020816044816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115611266575b600091611248575b506040519081529081906020820190565b611260915060203d811161067d5761066e8183610a25565b38611237565b61126e6113d8565b61122f565b50346101ec5760a03660031901126101ec576112906004356101db565b61129b6024356101db565b60843567ffffffffffffffff81116101ec576112bb9036906004016101f1565b505060206040517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b156112ee57565b608460405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152fd5b1561135f57565b608460405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152fd5b908160209103126101ec575190565b506040513d6000823e3d90fd5b156113ec57565b608460405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152fd5b803b156114b1576001600160a01b037f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc91167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b608460405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152fd5b9061152582611456565b6001600160a01b0382167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a28051158015906115e5575b611567575050565b6115e2916000806040519361157b85610a09565b602785527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208601527f206661696c6564000000000000000000000000000000000000000000000000006040860152602081519101845af46115dc611640565b916116bb565b50565b50600061155f565b906115f782611456565b6001600160a01b0382167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a280511580159061163857611567575050565b50600161155f565b3d1561166b573d9061165182610a47565b9161165f6040519384610a25565b82523d6000602084013e565b606090565b1561167757565b606460405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b919290156116de57508151156116cf575090565b6116db903b1515611670565b90565b8251909150156116f15750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b828510611737575050604492506000838284010152601f80199101168101030190fd5b8481018201518686016044015293810193859350611714565b806117585750565b600080808093338219f1506115e2611640565b50634e487b7160e01b600052603260045260246000fd5b9190811015611793575b60051b0190565b61179b61176b565b61178c565b356116db816101db565b903590601e19813603018212156101ec570180359067ffffffffffffffff82116101ec576020019181360383136101ec57565b90916117f6928110156117fa575b60051b8101906117aa565b9091565b61180261176b565b6117eb565b6001600160a01b03807f0000000000000000000000000000000000000000000000000000000000000000163314908115611888575b501561184457565b606460405162461bcd60e51b815260206004820152602060248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152fd5b905060005460101c1633143861183c565b600091829182602083519301915af16118b0611640565b9015610e465750565b6001600160a01b0360005460101c163314801561191c575b156118d857565b606460405162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152fd5b503033146118d1565b1561192c57565b608460405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152fd5b60009081547fffffffffffffffffffff0000000000000000000000000000000000000000ffff75ffffffffffffffffffffffffffffffffffffffff00008360101b16911617908183556001600160a01b03809260101c16827f0000000000000000000000000000000000000000000000000000000000000000167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de8580a3611a3c6118b9565b168152600160205265ffffffffffff60408083209282199384815416905560026020522091825416179055565b60051115611a7357565b634e487b7160e01b600052602160045260246000fd5b611a9281611a69565b80611a9a5750565b611aa381611a69565b60018103611af05760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b611af981611a69565b60028103611b465760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b80611b52600392611a69565b14611b5957565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608490fd5b906041815114600014611bee576117f6916020820151906060604084015193015160001a90611bf8565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311611c7c5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15611c6f575b81516001600160a01b03811615611c69579190565b50600190565b611c776113d8565b611c54565b50505050600090600390565b90919060009015611cd5575060ff65ffffffffffff60a01b7fffffffffffff00000000000000000000000000000000000000000000000000006001935b60d01b169360a01b169116171790565b65ffffffffffff60a01b7fffffffffffff000000000000000000000000000000000000000000000000000060ff9293611cc556fea2646970667358221220ffedab85852f4f03c70a7930cbf859679705ab11dcc7b0b32a0420981b6aa6cb64736f6c63430008110033";

type TestExpiryAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestExpiryAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestExpiryAccount__factory extends ContractFactory {
  constructor(...args: TestExpiryAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestExpiryAccount> {
    return super.deploy(
      anEntryPoint,
      overrides || {}
    ) as Promise<TestExpiryAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anEntryPoint, overrides || {});
  }
  override attach(address: string): TestExpiryAccount {
    return super.attach(address) as TestExpiryAccount;
  }
  override connect(signer: Signer): TestExpiryAccount__factory {
    return super.connect(signer) as TestExpiryAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestExpiryAccountInterface {
    return new utils.Interface(_abi) as TestExpiryAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestExpiryAccount {
    return new Contract(address, _abi, signerOrProvider) as TestExpiryAccount;
  }
}