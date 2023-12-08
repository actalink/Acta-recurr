/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BLSAccount,
  BLSAccountInterface,
} from "../../../../contracts/samples/bls/BLSAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "anAggregator",
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
        indexed: false,
        internalType: "uint256[4]",
        name: "oldPublicKey",
        type: "uint256[4]",
      },
      {
        indexed: false,
        internalType: "uint256[4]",
        name: "newPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "PublicKeyChanged",
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
    inputs: [],
    name: "aggregator",
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
    name: "getBlsPublicKey",
    outputs: [
      {
        internalType: "uint256[4]",
        name: "",
        type: "uint256[4]",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256[4]",
        name: "aPublicKey",
        type: "uint256[4]",
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
        internalType: "uint256[4]",
        name: "newPublicKey",
        type: "uint256[4]",
      },
    ],
    name: "setBlsPublicKey",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60e0346200019357601f62001e7e38819003918201601f19168301916001600160401b0383118484101762000198578084926040948552833981010312620001935780516001600160a01b03918282168203620001935760200151918216820362000193573060805260a05260005460ff8160081c166200013e5760ff8082160362000102575b5060c052604051611ccf9081620001af823960805181818161069a01528181610bc80152610d47015260a05181818161085e015281816109d801528181610a9601528181610e7f0152818161100f015281816111ba015281816112f201528181611a060152611a58015260c05181818161064c01526108b10152f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a13862000086565b60405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806223de29146101e657806301ffc9a7146101dd578063150b7a02146101d457806318dfb3c7146101cb57806318fc5c44146101c2578063245a7bfc146101b95780633659cfe6146101b05780633a871cdd146101a75780634a58db191461019e5780634d44560d146101955780634f1ef2861461018c57806352d1902d1461018357806357d95c431461017a5780638da5cb5b14610171578063b0d691fe14610168578063b61d27f61461015f578063bc197c8114610156578063c399ec881461014d578063c4d66de814610144578063d087d2881461013b578063e02afbae14610132578063ee472f36146101295763f23a6e610361000e5761012461139b565b61000e565b5061012461127b565b50610124611250565b50610124611162565b50610124611074565b50610124610fc0565b50610124610f16565b50610124610ea3565b50610124610e5e565b50610124610e33565b50610124610e02565b50610124610d2b565b50610124610b71565b50610124610a62565b506101246109c0565b5061012461081e565b50610124610670565b5061012461062b565b5061012461060c565b506101246103e7565b5061012461035b565b506101246102a1565b50610124610233565b6001600160a01b0381160361020057565b600080fd5b9181601f840112156102005782359167ffffffffffffffff8311610200576020838186019501011161020057565b50346102005760c0366003190112610200576102506004356101ef565b61025b6024356101ef565b6102666044356101ef565b67ffffffffffffffff60843581811161020057610287903690600401610205565b505060a43590811161020057610019903690600401610205565b5034610200576020366003190112610200576004357fffffffff0000000000000000000000000000000000000000000000000000000081168091036102005780630a85bd0160e11b60209214908115610331575b8115610307575b506040519015158152f35b7f01ffc9a700000000000000000000000000000000000000000000000000000000915014386102fc565b7f4e2312e000000000000000000000000000000000000000000000000000000000811491506102f5565b5034610200576080366003190112610200576103786004356101ef565b6103836024356101ef565b60643567ffffffffffffffff8111610200576103a3903690600401610205565b50506020604051630a85bd0160e11b8152f35b9181601f840112156102005782359167ffffffffffffffff8311610200576020808501948460051b01011161020057565b50346102005760403660031901126102005767ffffffffffffffff6004358181116102005761041a9036906004016103b6565b9091602435908111610200576104349036906004016103b6565b919061043e611a4d565b8282036104a25760005b82811061045157005b8061048561046a610465600194878a6118c1565b6118df565b61047f61047884898861191c565b3691610b3a565b90611adf565b6000198114610495575b01610448565b61049d611893565b61048f565b606460405162461bcd60e51b815260206004820152601360248201527f77726f6e67206172726179206c656e67746873000000000000000000000000006044820152fd5b50634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161051157604052565b6105196104e6565b604052565b6060810190811067ffffffffffffffff82111761051157604052565b6080810190811067ffffffffffffffff82111761051157604052565b6020810190811067ffffffffffffffff82111761051157604052565b60a0810190811067ffffffffffffffff82111761051157604052565b90601f8019910116810190811067ffffffffffffffff82111761051157604052565b604051906105bd8261051e565b565b608060031982011261020057806023121561020057604051906105e18261053a565b816084918211610200576004905b8282106105fc5750505090565b81358152602091820191016105ef565b50346102005761001961061e366105bf565b610626611aff565b611c12565b50346102005760003660031901126102005760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346102005760203660031901126102005760043561068e816101ef565b6001600160a01b0390817f000000000000000000000000000000000000000000000000000000000000000016916106c78330141561140f565b6106f67f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc938285541614611480565b6106fe611aff565b6040519061070b82610556565b600082527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610745575050610019915061157e565b6020600491604094939451928380926352d1902d60e01b825286165afa600091816107ee575b506107db5760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b610019936107e9911461150d565b611643565b61081091925060203d8111610817575b610808818361058e565b8101906114f1565b903861076b565b503d6107fe565b5034610200576003196060368201126102005760043567ffffffffffffffff81116102005761016081600401928236030112610200576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016330361097c576044019061089282826118e9565b905061090d575b6109096108ee6108a76105b0565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526000602082018190526040820152516001600160a01b031690565b6108f9604435611878565b6040519081529081906020820190565b0390f35b6109686104786109759361091f611c73565b604051610930602082018093611228565b6080815261093d81610572565b5190209361095b61096261095184846118e9565b94859391946118e9565b9050611b6b565b91611b82565b6020815191012014611b9a565b3880610899565b606460405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152fd5b50600080600319360112610a5f576001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681813b15610a5f57602491604051928380927fb760faf900000000000000000000000000000000000000000000000000000000825230600483015234905af18015610a52575b610a46575080f35b610a4f906104fd565b80f35b610a5a611500565b610a3e565b80fd5b50346102005760006040366003190112610a5f57600435610a82816101ef565b610a8a611aff565b816001600160a01b03807f00000000000000000000000000000000000000000000000000000000000000001692833b15610b0b576044908360405195869485937f205c287800000000000000000000000000000000000000000000000000000000855216600484015260243560248401525af18015610a5257610a46575080f35b8280fd5b60209067ffffffffffffffff8111610b2d575b601f01601f19160190565b610b356104e6565b610b22565b929192610b4682610b0f565b91610b54604051938461058e565b829481845281830111610200578281602093846000960137010152565b50604036600319011261020057600435610b8a816101ef565b60243567ffffffffffffffff8111610200573660238201121561020057610bbb903690602481600401359101610b3a565b906001600160a01b0391827f00000000000000000000000000000000000000000000000000000000000000001692610bf58430141561140f565b610c247f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc948286541614611480565b610c2c611aff565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610c62575050610019915061157e565b6020600491604094939451928380926352d1902d60e01b825286165afa60009181610d0b575b50610cf85760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b61001993610d06911461150d565b611715565b610d2491925060203d811161081757610808818361058e565b9038610c88565b5034610200576000366003190112610200576001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003610d98576040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152602090f35b608460405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152fd5b5034610200576020366003190112610200576020600435610e22816101ef565b6001600160a01b0360405191168152f35b50346102005760003660031901126102005760206001600160a01b0360005460101c16604051908152f35b50346102005760003660031901126102005760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461020057606036600319011261020057600435610ec1816101ef565b60443567ffffffffffffffff811161020057600091610ef0610ee884933690600401610205565b610478611a4d565b9060208251920190602435905af1610f06611768565b9015610f0e57005b602081519101fd5b50346102005760a036600319011261020057610f336004356101ef565b610f3e6024356101ef565b67ffffffffffffffff60443581811161020057610f5f9036906004016103b6565b505060643581811161020057610f799036906004016103b6565b505060843590811161020057610f93903690600401610205565b50506040517fbc197c81000000000000000000000000000000000000000000000000000000008152602090f35b50346102005760003660031901126102005760206040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281816024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115611067575b60009161104a575b50604051908152f35b6110619150823d811161081757610808818361058e565b38611041565b61106f611500565b611039565b503461020057602036600319011261020057600435611092816101ef565b6110d6600054916110ba60ff8460081c161580948195611154575b8115611134575b50611946565b826110cd600160ff196000541617600055565b61111b576119b7565b6110dc57005b6110ec61ff001960005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a1005b61112f61010061ff00196000541617600055565b6119b7565b303b15915081611146575b50386110b4565b6001915060ff16143861113f565b600160ff82161091506110ad565b5034610200576000366003190112610200576109096040517f35567e1a000000000000000000000000000000000000000000000000000000008152306004820152600060248201526020816044816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa90811561121b575b6000916111fd575b506040519081529081906020820190565b611215915060203d811161081757610808818361058e565b386111ec565b611223611500565b6111e4565b6000915b6004831061123957505050565b60019082518152602080910192019201919061122c565b503461020057600036600319011261020057608061126c611c73565b6112796040518092611228565bf35b50346102005761128a366105bf565b60009061133b8254916112b260ff8460081c1615809481956111545781156111345750611946565b826112c5600160ff196000541617600055565b611382575b75ffffffffffffffffffffffffffffffffffffffff0000198454168455836001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de8280a3611c12565b6113425780f35b61135261ff001960005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a180f35b61139661010061ff00196000541617600055565b6112ca565b50346102005760a0366003190112610200576113b86004356101ef565b6113c36024356101ef565b60843567ffffffffffffffff8111610200576113e3903690600401610205565b505060206040517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b1561141657565b608460405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152fd5b1561148757565b608460405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152fd5b90816020910312610200575190565b506040513d6000823e3d90fd5b1561151457565b608460405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152fd5b803b156115d9576001600160a01b037f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc91167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b608460405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152fd5b9061164d8261157e565b6001600160a01b0382167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a280511580159061170d575b61168f575050565b61170a91600080604051936116a38561051e565b602785527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208601527f206661696c6564000000000000000000000000000000000000000000000000006040860152602081519101845af4611704611768565b916117e3565b50565b506000611687565b9061171f8261157e565b6001600160a01b0382167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a28051158015906117605761168f575050565b506001611687565b3d15611793573d9061177982610b0f565b91611787604051938461058e565b82523d6000602084013e565b606090565b1561179f57565b606460405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b9192901561180657508151156117f7575090565b611803903b1515611798565b90565b8251909150156118195750805190602001fd5b6040519062461bcd60e51b82528160208060048301528251908160248401526000935b82851061185f575050604492506000838284010152601f80199101168101030190fd5b848101820151868601604401529381019385935061183c565b806118805750565b600080808093338219f15061170a611768565b50634e487b7160e01b600052601160045260246000fd5b50634e487b7160e01b600052603260045260246000fd5b91908110156118d2575b60051b0190565b6118da6118aa565b6118cb565b35611803816101ef565b903590601e1981360301821215610200570180359067ffffffffffffffff82116102005760200191813603831361020057565b909161193592811015611939575b60051b8101906118e9565b9091565b6119416118aa565b61192a565b1561194d57565b608460405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152fd5b75ffffffffffffffffffffffffffffffffffffffff00001975ffffffffffffffffffffffffffffffffffffffff00006000549260101b16911617806000556001600160a01b03809160101c16907f0000000000000000000000000000000000000000000000000000000000000000167f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de600080a3565b6001600160a01b03807f0000000000000000000000000000000000000000000000000000000000000000163314908115611ace575b5015611a8a57565b606460405162461bcd60e51b815260206004820152602060248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152fd5b905060005460101c16331438611a82565b600091829182602083519301915af1611af6611768565b9015610f0e5750565b6001600160a01b0360005460101c1633148015611b62575b15611b1e57565b606460405162461bcd60e51b815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152fd5b50303314611b17565b607f19810191908211611b7a57565b6105bd611893565b90939293848311610200578411610200578101920390565b15611ba157565b606460405162461bcd60e51b815260206004820152600c60248201527f77726f6e67207075626b657900000000000000000000000000000000000000006044820152fd5b9060019182906000905b60048210611bfe575050509050565b825481529184019190840190602001611bef565b7f42e4c4ce1432650f17e41c4ea77ed12c0ab20b229d3ffd84a2ebc9f8abb25a83610100604051611c4281611be5565b611c4f6080820185611228565ba160005b60048110611c5f575050565b600190602083519301928183015501611c53565b6080604051611c818161053a565b369037604051611c9081611be5565b6118038161053a56fea264697066735822122076527b0a412354c9a7c36ed8d133758876f1fc12990dc451147249096b2e205e64736f6c63430008110033";

type BLSAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BLSAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BLSAccount__factory extends ContractFactory {
  constructor(...args: BLSAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    anAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BLSAccount> {
    return super.deploy(
      anEntryPoint,
      anAggregator,
      overrides || {}
    ) as Promise<BLSAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    anAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      anEntryPoint,
      anAggregator,
      overrides || {}
    );
  }
  override attach(address: string): BLSAccount {
    return super.attach(address) as BLSAccount;
  }
  override connect(signer: Signer): BLSAccount__factory {
    return super.connect(signer) as BLSAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BLSAccountInterface {
    return new utils.Interface(_abi) as BLSAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BLSAccount {
    return new Contract(address, _abi, signerOrProvider) as BLSAccount;
  }
}
