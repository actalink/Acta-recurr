/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SimpleAccount,
  SimpleAccountInterface,
} from "../../../contracts/samples/SimpleAccount";

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
  "0x60c03461015f57601f611c2138819003918201601f19168301916001600160401b038311848410176101645780849260209460405283398101031261015f57516001600160a01b038116810361015f573060805260a05260005460ff8160081c1661010a5760ff808216036100cf575b604051611aa6908161017b82396080518181816104c4015281816109bb0152610b3a015260a05181818161068501528181610739015281816107f701528181610c7201528181610e0201528181610fad0152818161167801526116ca0152f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a13861006f565b60405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806223de291461019657806301ffc9a71461018d578063150b7a021461018457806318dfb3c71461017b5780633659cfe6146101725780633a871cdd146101695780634a58db19146101605780634d44560d146101575780634f1ef2861461014e57806352d1902d1461014557806357d95c431461013c5780638da5cb5b14610133578063b0d691fe1461012a578063b61d27f614610121578063bc197c8114610118578063c399ec881461010f578063c4d66de814610106578063d087d288146100fd5763f23a6e610361000e576100f861101b565b61000e565b506100f8610f55565b506100f8610e67565b506100f8610db3565b506100f8610d09565b506100f8610c96565b506100f8610c51565b506100f8610c26565b506100f8610bf5565b506100f8610b1e565b506100f8610964565b506100f86107c3565b506100f8610721565b506100f8610648565b506100f861049a565b506100f8610397565b506100f861030b565b506100f8610251565b506100f86101e3565b6001600160a01b038116036101b057565b600080fd5b9181601f840112156101b05782359167ffffffffffffffff83116101b057602083818601950101116101b057565b50346101b05760c03660031901126101b05761020060043561019f565b61020b60243561019f565b61021660443561019f565b67ffffffffffffffff6084358181116101b0576102379036906004016101b5565b505060a4359081116101b0576100199036906004016101b5565b50346101b05760203660031901126101b0576004357fffffffff0000000000000000000000000000000000000000000000000000000081168091036101b05780630a85bd0160e11b602092149081156102e1575b81156102b7575b506040519015158152f35b7f01ffc9a700000000000000000000000000000000000000000000000000000000915014386102ac565b7f4e2312e000000000000000000000000000000000000000000000000000000000811491506102a5565b50346101b05760803660031901126101b05761032860043561019f565b61033360243561019f565b60643567ffffffffffffffff81116101b0576103539036906004016101b5565b50506020604051630a85bd0160e11b8152f35b9181601f840112156101b05782359167ffffffffffffffff83116101b0576020808501948460051b0101116101b057565b50346101b05760403660031901126101b05767ffffffffffffffff600480358281116101b0576103ca9036908301610366565b60249291929384359081116101b0576103e69036908401610366565b6103ee6116bf565b8083036104575760005b83811061040157005b61043261041761041283878a61152a565b611548565b61042c610425848688611585565b369161092d565b906119e4565b6000198114610443576001016103f8565b86601186634e487b7160e01b600052526000fd5b60648460138860206040519362461bcd60e51b85528401528201527f77726f6e67206172726179206c656e67746873000000000000000000000000006044820152fd5b50346101b05760203660031901126101b0576004356104b88161019f565b6001600160a01b0390817f000000000000000000000000000000000000000000000000000000000000000016916104f18330141561108f565b6105207f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc938285541614611100565b610528611a04565b60405190610535826108a8565b600082527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561056f57505061001991506111fe565b6020600491604094939451928380926352d1902d60e01b825286165afa60009181610618575b506106055760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b61001993610613911461118d565b6112c3565b61063a91925060203d8111610641575b61063281836108e0565b810190611171565b9038610595565b503d610628565b50346101b0576003196060368201126101b0576004359067ffffffffffffffff82116101b0576101609082360301126101b0576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633036106dd576106be6106d99160243590600401611751565b6106c96044356114f8565b6040519081529081906020820190565b0390f35b606460405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152fd5b506000806003193601126107c0576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681813b156107c057602491604051928380927fb760faf900000000000000000000000000000000000000000000000000000000825230600483015234905af180156107b3575b6107a7575080f35b6107b090610887565b80f35b6107bb611180565b61079f565b80fd5b50346101b057600060403660031901126107c0576004356107e38161019f565b6107eb611a04565b816001600160a01b03807f00000000000000000000000000000000000000000000000000000000000000001692833b1561086c576044908360405195869485937f205c287800000000000000000000000000000000000000000000000000000000855216600484015260243560248401525af180156107b3576107a7575080f35b8280fd5b50634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161089b57604052565b6108a3610870565b604052565b6020810190811067ffffffffffffffff82111761089b57604052565b6060810190811067ffffffffffffffff82111761089b57604052565b90601f8019910116810190811067ffffffffffffffff82111761089b57604052565b60209067ffffffffffffffff8111610920575b601f01601f19160190565b610928610870565b610915565b92919261093982610902565b9161094760405193846108e0565b8294818452818301116101b0578281602093846000960137010152565b5060403660031901126101b05760043561097d8161019f565b60243567ffffffffffffffff81116101b057366023820112156101b0576109ae90369060248160040135910161092d565b906001600160a01b0391827f000000000000000000000000000000000000000000000000000000000000000016926109e88430141561108f565b610a177f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc948286541614611100565b610a1f611a04565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610a5557505061001991506111fe565b6020600491604094939451928380926352d1902d60e01b825286165afa60009181610afe575b50610aeb5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b61001993610af9911461118d565b611395565b610b1791925060203d81116106415761063281836108e0565b9038610a7b565b50346101b05760003660031901126101b0576001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003610b8b576040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152602090f35b608460405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152fd5b50346101b05760203660031901126101b0576020600435610c158161019f565b6001600160a01b0360405191168152f35b50346101b05760003660031901126101b05760206001600160a01b0360005460101c16604051908152f35b50346101b05760003660031901126101b05760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346101b05760603660031901126101b057600435610cb48161019f565b60443567ffffffffffffffff81116101b057600091610ce3610cdb849336906004016101b5565b6104256116bf565b9060208251920190602435905af1610cf96113e8565b9015610d0157005b602081519101fd5b50346101b05760a03660031901126101b057610d2660043561019f565b610d3160243561019f565b67ffffffffffffffff6044358181116101b057610d52903690600401610366565b50506064358181116101b057610d6c903690600401610366565b50506084359081116101b057610d869036906004016101b5565b50506040517fbc197c81000000000000000000000000000000000000000000000000000000008152602090f35b50346101b05760003660031901126101b05760206040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281816024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115610e5a575b600091610e3d575b50604051908152f35b610e549150823d81116106415761063281836108e0565b38610e34565b610e62611180565b610e2c565b50346101b05760203660031901126101b057600435610e858161019f565b610ec960005491610ead60ff8460081c161580948195610f47575b8115610f27575b506115af565b82610ec0600160ff196000541617600055565b610f0e57611620565b610ecf57005b610edf61ff001960005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a1005b610f2261010061ff00196000541617600055565b611620565b303b15915081610f39575b5038610ea7565b6001915060ff161438610f32565b600160ff8216109150610ea0565b50346101b05760003660031901126101b0576106d96040517f35567e1a000000000000000000000000000000000000000000000000000000008152306004820152600060248201526020816044816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa90811561100e575b600091610ff0575b506040519081529081906020820190565b611008915060203d81116106415761063281836108e0565b38610fdf565b611016611180565b610fd7565b50346101b05760a03660031901126101b05761103860043561019f565b61104360243561019f565b60843567ffffffffffffffff81116101b0576110639036906004016101b5565b505060206040517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b1561109657565b608460405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152fd5b1561110757565b608460405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152fd5b908160209103126101b0575190565b506040513d6000823e3d90fd5b1561119457565b608460405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152fd5b803b15611259576001600160a01b037f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc91167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b608460405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152fd5b906112cd826111fe565b6001600160a01b0382167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a280511580159061138d575b61130f575050565b61138a9160008060405193611323856108c4565b602785527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208601527f206661696c6564000000000000000000000000000000000000000000000000006040860152602081519101845af46113846113e8565b91611463565b50565b506000611307565b9061139f826111fe565b6001600160a01b0382167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a28051158015906113e05761130f575050565b506001611307565b3d15611413573d906113f982610902565b9161140760405193846108e0565b82523d6000602084013e565b606090565b1561141f57565b606460405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b919290156114865750815115611477575090565b611483903b1515611418565b90565b8251909150156114995750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b8285106114df575050604492506000838284010152601f80199101168101030190fd5b84810182015186860160440152938101938593506114bc565b806115005750565b600080808093338219f15061138a6113e8565b50634e487b7160e01b600052603260045260246000fd5b919081101561153b575b60051b0190565b611543611513565b611534565b356114838161019f565b903590601e19813603018212156101b0570180359067ffffffffffffffff82116101b0576020019181360383136101b057565b909161159e928110156115a2575b60051b810190611552565b9091565b6115aa611513565b611593565b156115b657565b608460405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152fd5b7fffffffffffffffffffff0000000000000000000000000000000000000000ffff75ffffffffffffffffffffffffffffffffffffffff00006000549260101b16911617806000556001600160a01b03809160101c16907f0000000000000000000000000000000000000000000000000000000000000000167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de600080a3565b6001600160a01b03807f0000000000000000000000000000000000000000000000000000000000000000163314908115611740575b50156116fc57565b606460405162461bcd60e51b815260206004820152602060248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152fd5b905060005460101c163314386116f4565b907f19457468657265756d205369676e6564204d6573736167653a0a333200000000600052601c52603c6000206117b56117ad6001600160a01b03926117a76104258560005460101c1696610140810190611552565b90611920565b9190916117e5565b16036117c057600090565b600190565b600511156117cf57565b634e487b7160e01b600052602160045260246000fd5b6117ee816117c5565b806117f65750565b6117ff816117c5565b6001810361184c5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b611855816117c5565b600281036118a25760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b806118ae6003926117c5565b146118b557565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608490fd5b90604181511460001461194a5761159e916020820151906060604084015193015160001a90611954565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116119d85791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156119cb575b81516001600160a01b038116156119c5579190565b50600190565b6119d3611180565b6119b0565b50505050600090600390565b600091829182602083519301915af16119fb6113e8565b9015610d015750565b6001600160a01b0360005460101c1633148015611a67575b15611a2357565b606460405162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152fd5b50303314611a1c56fea26469706673582212209f268b8037046fadb3c289ccd088bfe3385fbca466246d7d14849d688c772ff264736f6c63430008110033";

type SimpleAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccount__factory extends ContractFactory {
  constructor(...args: SimpleAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccount> {
    return super.deploy(
      anEntryPoint,
      overrides || {}
    ) as Promise<SimpleAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anEntryPoint, overrides || {});
  }
  override attach(address: string): SimpleAccount {
    return super.attach(address) as SimpleAccount;
  }
  override connect(signer: Signer): SimpleAccount__factory {
    return super.connect(signer) as SimpleAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountInterface {
    return new utils.Interface(_abi) as SimpleAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccount {
    return new Contract(address, _abi, signerOrProvider) as SimpleAccount;
  }
}