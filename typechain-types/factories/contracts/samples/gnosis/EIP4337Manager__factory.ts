/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  EIP4337Manager,
  EIP4337ManagerInterface,
} from "../../../../contracts/samples/gnosis/EIP4337Manager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "anEntryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "eip4337Fallback",
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
    name: "executeAndRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract GnosisSafe",
        name: "safe",
        type: "address",
      },
    ],
    name: "getCurrentEIP4337Manager",
    outputs: [
      {
        internalType: "address",
        name: "prev",
        type: "address",
      },
      {
        internalType: "address",
        name: "manager",
        type: "address",
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
        name: "prevModule",
        type: "address",
      },
      {
        internalType: "contract EIP4337Manager",
        name: "oldManager",
        type: "address",
      },
      {
        internalType: "contract EIP4337Manager",
        name: "newManager",
        type: "address",
      },
    ],
    name: "replaceEIP4337Manager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract EIP4337Manager",
        name: "manager",
        type: "address",
      },
    ],
    name: "setup4337Modules",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract GnosisSafe",
        name: "safe",
        type: "address",
      },
      {
        internalType: "contract EIP4337Manager",
        name: "manager",
        type: "address",
      },
    ],
    name: "validateEip4337",
    outputs: [],
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x60c0346100eb576001600160401b0390601f62002b9d38819003918201601f1916830191848311848410176100d5578084926020946040528339810103126100eb57516001600160a01b03919082811681036100eb5760a05260405190610d07808301918211838310176100d557602091839162001e9683393081520301906000f080156100c95716608052604051611da59081620000f1823960805181818161036a0152610545015260a0518181816101940152818161051d015281816105e401526109640152f35b6040513d6000823e3d90fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe60806040526004361015610013575b600080fd5b60003560e01c8063039b1728146100c75780633a871cdd146100be57806345b1e0ca146100b557806370b8a01d146100ac578063940d3c60146100a3578063b0d691fe1461009a578063d041593b14610091578063d087d288146100885763efae6e061461008057600080fd5b61000e6109e2565b5061000e610925565b5061000e610608565b5061000e6105c3565b5061000e610492565b5061000e610349565b5061000e610309565b5061000e61011d565b3461000e57602036600319011261000e576100ec6004356100e78161010c565b611bfa565b604080516001600160a01b039384168152919092166020820152f35b0390f35b6001600160a01b0381160361000e57565b503461000e5760031960603682011261000e5760043567ffffffffffffffff9182821161000e5761016090823603011261000e57610108916101bb604435916000936101723661016c36610e1c565b36610e33565b939061019061018a6001600160a01b03968793610e49565b60601c90565b16937f0000000000000000000000000000000000000000000000000000000000000000168414610e7a565b61026960206102196101f86024357f19457468657265756d205369676e6564204d6573736167653a0a333200000000600052601c52603c60002090565b61021361020c610144870187600401610ec5565b369161045b565b90611015565b610227600160045414610ef8565b6040517f2f54bf6e0000000000000000000000000000000000000000000000000000000081526001600160a01b03909116600482015291829081906024820190565b0381305afa9081156102fc575b86916102ce575b50156102c5575b90602461029392013510610f68565b816102ab575b50506040519081529081906020820190565b600080809381935af1506102bd610fe5565b503880610299565b60019450610284565b6102ef915060203d81116102f5575b6102e781836103ff565b810190610f43565b3861027d565b503d6102dd565b610304610f5b565b610276565b503461000e57604036600319011261000e5761033c60043561032a8161010c565b602435906103378261010c565b6117d4565b005b600091031261000e57565b503461000e57600036600319011261000e5760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b50634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff81116103b957604052565b6103c161038e565b604052565b610160810190811067ffffffffffffffff8211176103b957604052565b6040810190811067ffffffffffffffff8211176103b957604052565b90601f8019910116810190811067ffffffffffffffff8211176103b957604052565b6040519061042e826103c6565b565b60209067ffffffffffffffff811161044e575b601f01601f19160190565b61045661038e565b610443565b92919261046782610430565b9161047560405193846103ff565b82948184528183011161000e578281602093846000960137010152565b503461000e57608036600319011261000e576004356104b08161010c565b60443567ffffffffffffffff811161000e573660238201121561000e576104e190369060248160040135910161045b565b60643590600282101561000e576105759261056c61050b6105053661016c36610e1c565b90610e49565b60601c6105436001600160a01b0391827f00000000000000000000000000000000000000000000000000000000000000001614610e7a565b7f0000000000000000000000000000000000000000000000000000000000000000163314611259565b60243590611382565b61057d611d54565b901561058557005b604481511061000e576105a78160248060046105bf95015183010191016112ed565b60405191829162461bcd60e51b835260048301611371565b0390fd5b503461000e57600036600319011261000e5760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461000e5760208060031936011261000e5760046001600160a01b0381356106308161010c565b169060409182519063586b48ff60e11b9182815285818581855afa908115610918575b6000916108fb575b506106a7855187818061068b632d9ad53d60e01b968783528a83019190916001600160a01b036020820193169052565b0381305afa9081156108ee575b6000916108d1575b50156113f3565b6107116106f58787516370b8a01d60e01b9485825282828a818a5afa9182156108c4575b6000926108a5575b508951938492839283528a83019190916001600160a01b036020820193169052565b0381305afa908115610898575b60009161087b575b5015611464565b845192835285838581855afa92831561086e575b60009361084f575b50303b1561000e57859085516000818061076463610b592560e01b988983528a83019190916001600160a01b036020820193169052565b038183305af18015610842575b61082f575b508486518094819382525afa948515610822575b6000956107f3575b5050303b1561000e576107c0600093519485938493845283019190916001600160a01b036020820193169052565b038183305af180156107e6575b6107d357005b806107e061033c926103a5565b8061033e565b6107ee610f5b565b6107cd565b610813929550803d1061081b575b61080b81836103ff565b8101906113de565b923880610792565b503d610801565b61082a610f5b565b61078a565b806107e061083c926103a5565b38610776565b61084a610f5b565b610771565b610867919350863d881161081b5761080b81836103ff565b913861072d565b610876610f5b565b610725565b6108929150883d8a116102f5576102e781836103ff565b3861070a565b6108a0610f5b565b610702565b6108bd919250833d851161081b5761080b81836103ff565b90386106d3565b6108cc610f5b565b6106cb565b6108e89150883d8a116102f5576102e781836103ff565b386106a0565b6108f6610f5b565b610698565b6109129150863d881161081b5761080b81836103ff565b3861065b565b610920610f5b565b610653565b503461000e57600036600319011261000e57610108604051631aab3f0d60e11b8152306004820152600060248201526020816044816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa9081156109d5575b6000916109a7575b506040519081529081906020820190565b6109c8915060203d81116109ce575b6109c081836103ff565b8101906113c4565b38610996565b503d6109b6565b6109dd610f5b565b61098e565b503461000e57606036600319011261000e5760048035610a018161010c565b60243591610a0e8361010c565b60443591610a1b8361010c565b6001600160a01b03809416906040918251956370b8a01d60e01b9687815260209384828881875afa918215610df8575b600092610dd9575b50610a9d8651632d9ad53d60e01b8152868180610a82878d83019190916001600160a01b036020820193169052565b0381305afa908115610dcc575b600091610daf575b506114d5565b8551908582898163586b48ff60e11b988982525afa918215610da2575b600092610d83575b50303b1561000e5786517fe009cfde000000000000000000000000000000000000000000000000000000008082526001600160a01b03808616838c01908152941660208501529260009082908190604001038183305af18015610d76575b610d63575b50303b1561000e5786519182526001600160a01b03908116888301908152921660208301529060009082908190604001038183305af18015610d56575b610d43575b50851690835196875282878681855afa968715610d36575b600097610d15575b5082908585518094819382525afa918215610d08575b600092610ceb575b5050303b1561000e57815160008180610bdb63610b592560e01b958683528883019190916001600160a01b036020820193169052565b038183305af18015610cde575b610ccb575b50303b1561000e5781519081526001600160a01b03851683820190815260009082908190602001038183305af18015610cbe575b610cab575b50303b1561000e57517ff08a03230000000000000000000000000000000000000000000000000000000081526001600160a01b0390931690830190815261033c929060009082908190602001038183305af18015610c9e575b610c8b575b50306117d4565b806107e0610c98926103a5565b38610c84565b610ca6610f5b565b610c7f565b806107e0610cb8926103a5565b38610c26565b610cc6610f5b565b610c21565b806107e0610cd8926103a5565b38610bed565b610ce6610f5b565b610be8565b610d019250803d1061081b5761080b81836103ff565b3880610ba5565b610d10610f5b565b610b9d565b83919750610d2f90823d841161081b5761080b81836103ff565b9690610b87565b610d3e610f5b565b610b7f565b806107e0610d50926103a5565b38610b67565b610d5e610f5b565b610b62565b806107e0610d70926103a5565b38610b25565b610d7e610f5b565b610b20565b610d9b919250863d881161081b5761080b81836103ff565b9038610ac2565b610daa610f5b565b610aba565b610dc69150873d89116102f5576102e781836103ff565b38610a97565b610dd4610f5b565b610a8f565b610df1919250853d871161081b5761080b81836103ff565b9038610a53565b610e00610f5b565b610a4b565b50634e487b7160e01b600052601160045260246000fd5b601319810191908211610e2b57565b61042e610e05565b92919283821161000e57831161000e5780920390565b6bffffffffffffffffffffffff199035818116939260148110610e6b57505050565b60140360031b82901b16169150565b15610e8157565b606460405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20656e747279706f696e74000000006044820152fd5b903590601e198136030182121561000e570180359067ffffffffffffffff821161000e5760200191813603831361000e57565b15610eff57565b606460405162461bcd60e51b815260206004820152601960248201527f6163636f756e743a206f6e6c79207468726573686f6c642031000000000000006044820152fd5b9081602091031261000e5751801515810361000e5790565b506040513d6000823e3d90fd5b15610f6f57565b606460405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f6e73657175656e7469616c206e6f6e6365000000006044820152fd5b604051906020820182811067ffffffffffffffff821117610fd8575b60405260008252565b610fe061038e565b610fcf565b3d15611010573d90610ff682610430565b9161100460405193846103ff565b82523d6000602084013e565b606090565b61102a9161102291611191565b919091611056565b90565b50634e487b7160e01b600052602160045260246000fd5b6005111561104e57565b61042e61102d565b61105f81611044565b806110675750565b61107081611044565b600181036110bd5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b6110c681611044565b600281036111135760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b8061111f600392611044565b1461112657565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608490fd5b9060418151146000146111bf576111bb916020820151906060604084015193015160001a906111c9565b9091565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831161124d5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15611240575b81516001600160a01b0381161561123a579190565b50600190565b611248610f5b565b611225565b50505050600090600390565b1561126057565b608460405162461bcd60e51b815260206004820152602160248201527f6163636f756e743a206e6f742066726f6d204549503433333746616c6c62616360448201527f6b000000000000000000000000000000000000000000000000000000000000006064820152fd5b60005b8381106112dd5750506000910152565b81810151838201526020016112cd565b60208183031261000e5780519067ffffffffffffffff821161000e570181601f8201121561000e57805161132081610430565b9261132e60405194856103ff565b8184526020828401011161000e5761102a91602080850191016112ca565b90602091611365815180928185528580860191016112ca565b601f01601f1916010190565b90602061102a92818152019061134c565b60009391600185949360028110156113b7575b1484146113aa5750602082519201908319f490565b602083519301918419f190565b6113bf61102d565b611395565b9081602091031261000e575190565b519061042e8261010c565b9081602091031261000e575161102a8161010c565b156113fa57565b608460405162461bcd60e51b815260206004820152602c60248201527f7365747570343333374d6f64756c65733a20656e747279706f696e7420616c7260448201527f6561647920656e61626c656400000000000000000000000000000000000000006064820152fd5b1561146b57565b608460405162461bcd60e51b815260206004820152603160248201527f7365747570343333374d6f64756c65733a206569703433333746616c6c62616360448201527f6b20616c726561647920656e61626c65640000000000000000000000000000006064820152fd5b156114dc57565b608460405162461bcd60e51b815260206004820152602f60248201527f7265706c616365454950343333374d616e616765723a206f6c644d616e61676560448201527f72206973206e6f742061637469766500000000000000000000000000000000006064820152fd5b604051906080820182811067ffffffffffffffff821117611573575b604052604182526060366020840137565b61157b61038e565b611562565b50634e487b7160e01b600052603260045260246000fd5b6060908051604010156115a8570190565b6115b0611580565b0190565b6022908051600210156115a8570190565b6043908051602310156115a8570190565b60209067ffffffffffffffff81116115f0575b60051b0190565b6115f861038e565b6115e9565b60409081519161160c836103e3565b60018352829160005b6020808210156116805783516020929161162e826103c6565b6000825260008183015260608087840152808084015260006080840152600060a0840152600060c0840152600060e0840152600061010084015280610120840152610140830152828801015201611615565b505091925050565b6020908051156115a8570190565b60209181518110156116ab575b60051b010190565b6116b3611580565b6116a3565b91929092604093848401858552815180915260609081860191808260051b880101926020809501986000925b84841061170757505050505061042e939495509401906001600160a01b03169052565b909192939486806117c36001938e8e605f19908303018952516117338282516001600160a01b03169052565b83810151848301526117af6117686117588a840151610160808d88015286019061134c565b898401518582038b87015261134c565b6080808401519085015260a0808401519085015260c0808401519085015260e08084015190850152610100808401519085015261012080840151908583039086015261134c565b91610140809201519181840391015261134c565b9c01940194019299949391906116e4565b6117dc611546565b91601b6117e884611597565b5360016117f4846115b4565b536001611800846115c5565b536001600160a01b0380911660409182519163586b48ff60e11b95868452602096879160049783878a81885afa968715611b45575b600097611b1e575b508386611879921680988b898c51809681958294631aab3f0d60e11b8452830160206000919392936001600160a01b0360408201951681520152565b0392165afa908115611b11575b600091611af4575b506118a961189a610421565b6001600160a01b039098168852565b838701526118b5610fb3565b878701526118c1610fb3565b606087015260006080870152620f424060a0870152600060c0870152600060e087015260006101008701526118f4610fb3565b6101208701526101408601526119086115fd565b9461191286611688565b5261191c85611688565b508686518094819382525afa908115611ae7575b600091611aca575b5016803b1561000e5761197f60009291839285519485809481937f1fad948c00000000000000000000000000000000000000000000000000000000835233908b84016116b8565b03925af19081611ab7575b50611a4557611997610fe5565b92835181850120908251908101907f220266b6000000000000000000000000000000000000000000000000000000008252611a2081611a12602482016080906000815260406020820152601460408201527f41413234207369676e6174757265206572726f7200000000000000000000000060608201520190565b03601f1981018352826103ff565b51902003611a2d57505050565b6105bf905192839262461bcd60e51b84528301611371565b6105bf92505191829162461bcd60e51b8352820160809060208152602460208201527f76616c6964617465456970343333373a2068616e646c654f7073206d7573742060408201527f6661696c0000000000000000000000000000000000000000000000000000000060608201520190565b806107e0611ac4926103a5565b3861198a565b611ae19150863d881161081b5761080b81836103ff565b38611938565b611aef610f5b565b611930565b611b0b9150843d86116109ce576109c081836103ff565b3861188e565b611b19610f5b565b611886565b61187991975086611b3c8692833d851161081b5761080b81836103ff565b9892505061183d565b611b4d610f5b565b611835565b919060408382031261000e57825167ffffffffffffffff811161000e5783019080601f8301121561000e57815190611b89826115d6565b91611b9760405193846103ff565b808352602093848085019260051b82010192831161000e578401905b828210611bc9575050509061102a9193016113d3565b8480918351611bd78161010c565b815201910190611bb3565b6001906000198114611bf2570190565b6115b0610e05565b906001918260408051947fcc2f8452000000000000000000000000000000000000000000000000000000008652600095600490878180611c4885820190606460206040840193600181520152565b03816001600160a01b03809a165afa908115611d47575b8891611d24575b508792855b611c7b575b505050505050508190565b8151841015611d1f57611c9e611c918584611696565b516001600160a01b031690565b908551907f2bcadc240000000000000000000000000000000000000000000000000000000082526020808387818d88165afa9283918d94611d00575b5050611cf3575050611cec9093611be2565b9285611c6b565b9950979650505050505050565b611d17929450803d1061081b5761080b81836103ff565b913880611cda565b611c70565b611d4091503d808a833e611d3881836103ff565b810190611b52565b5038611c66565b611d4f610f5b565b611c5f565b3d604051906020818301016040528082526000602083013e9056fea2646970667358221220e24f89f81e6ce48e6409328971539551bcbc5ffe65b1dd7334804fd8729fb2b764736f6c6343000811003360a03461007157601f610d0738819003918201601f19168301916001600160401b038311848410176100765780849260209460405283398101031261007157516001600160a01b038116810361007157608052604051610c7a908161008d823960805181818161044701526108390152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe60806040526004361015610013575b600080fd5b60003560e01c806223de291461010257806301ffc9a7146100f9578063150b7a02146100f05780631626ba7e146100e75780632bcadc24146100de5780633a871cdd146100d5578063940d3c60146100cc578063a3f4df7e146100c3578063bc197c81146100ba578063d087d288146100b1578063f23a6e61146100a85763ffa1ad74146100a057600080fd5b61000e61070b565b5061000e61069b565b5061000e61067f565b5061000e6105d9565b5061000e61054d565b5061000e6104af565b5061000e61046b565b5061000e610426565b5061000e6103bd565b5061000e610292565b5061000e6101d8565b5061000e610165565b600435906001600160a01b038216820361000e57565b602435906001600160a01b038216820361000e57565b9181601f8401121561000e5782359167ffffffffffffffff831161000e576020838186019501011161000e57565b503461000e5760c036600319011261000e5761017f61010b565b50610188610121565b506044356001600160a01b0381160361000e5767ffffffffffffffff60843581811161000e576101bc903690600401610137565b505060a43590811161000e576101d6903690600401610137565b005b503461000e57602036600319011261000e576004357fffffffff00000000000000000000000000000000000000000000000000000000811680910361000e57807f4e2312e00000000000000000000000000000000000000000000000000000000060209214908115610281575b8115610257575b506040519015158152f35b7f01ffc9a7000000000000000000000000000000000000000000000000000000009150143861024c565b630a85bd0160e11b81149150610245565b503461000e57608036600319011261000e576102ac61010b565b506102b5610121565b5060643567ffffffffffffffff811161000e576102d6903690600401610137565b50506020604051630a85bd0160e11b8152f35b50634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff82111761031c57604052565b6103246102e9565b604052565b90601f8019910116810190811067ffffffffffffffff82111761031c57604052565b60209067ffffffffffffffff8111610369575b601f01601f19160190565b6103716102e9565b61035e565b81601f8201121561000e5780359061038d8261034b565b9261039b6040519485610329565b8284526020838301011161000e57816000926020809301838601378301015290565b503461000e57604036600319011261000e5760243567ffffffffffffffff811161000e576103fc6103f46020923690600401610376565b600435610909565b7fffffffff0000000000000000000000000000000000000000000000000000000060405191168152f35b503461000e57600036600319011261000e5760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b503461000e5760031960603682011261000e576004359067ffffffffffffffff821161000e57610160913603011261000e5760206104a7610762565b604051908152f35b503461000e57608036600319011261000e576104c961010b565b5060443567ffffffffffffffff811161000e576104ea903690600401610376565b506002606435101561000e576101d6610809565b60005b8381106105115750506000910152565b8181015183820152602001610501565b6040916020825261054181518092816020860152602086860191016104fe565b601f01601f1916010190565b503461000e57600036600319011261000e576105a460405161056e81610300565b601881527f44656661756c742043616c6c6261636b2048616e646c65720000000000000000602082015260405191829182610521565b0390f35b9181601f8401121561000e5782359167ffffffffffffffff831161000e576020808501948460051b01011161000e57565b503461000e5760a036600319011261000e576105f361010b565b506105fc610121565b5067ffffffffffffffff60443581811161000e5761061e9036906004016105a8565b505060643581811161000e576106389036906004016105a8565b505060843590811161000e57610652903690600401610137565b50506040517fbc197c81000000000000000000000000000000000000000000000000000000008152602090f35b503461000e57600036600319011261000e5760206104a7610762565b503461000e5760a036600319011261000e576106b561010b565b506106be610121565b5060843567ffffffffffffffff811161000e576106df903690600401610137565b505060206040517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b503461000e57600036600319011261000e576105a460405161072c81610300565b600581527f312e302e30000000000000000000000000000000000000000000000000000000602082015260405191829182610521565b61076a610809565b60208180518101031261000e576020015190565b5190811515820361000e57565b919060408382031261000e576107a08361077e565b9260208101519067ffffffffffffffff821161000e570181601f8201121561000e5780516107cd8161034b565b926107db6040519485610329565b8184526020828401011161000e576107f991602080850191016104fe565b90565b506040513d6000823e3d90fd5b6040517f5229073f0000000000000000000000000000000000000000000000000000000081526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000166004820152600080602483015260806044830152366084830152368160a48401378060a4368401015260016064830152808260a481601f19601f360116810103018183335af19182156108e8575b8180936108c1575b5050156108b95790565b602081519101fd5b9091506108e092503d8091833e6108d88183610329565b81019061078b565b9038806108af565b6108f06107fc565b6108a7565b9081602091031261000e576107f99061077e565b61094a91610942917f19457468657265756d205369676e6564204d6573736167653a0a333200000000600052601c52603c600020610b7c565b919091610a41565b6001600160a01b03604051917f2f54bf6e000000000000000000000000000000000000000000000000000000008352166004820152602081602481335afa908115610a14575b6000916109e6575b50156109c2577f1626ba7e0000000000000000000000000000000000000000000000000000000090565b7fffffffff0000000000000000000000000000000000000000000000000000000090565b610a07915060203d8111610a0d575b6109ff8183610329565b8101906108f5565b38610998565b503d6109f5565b610a1c6107fc565b610990565b60051115610a2b57565b634e487b7160e01b600052602160045260246000fd5b610a4a81610a21565b80610a525750565b610a5b81610a21565b60018103610aa85760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b610ab181610a21565b60028103610afe5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b80610b0a600392610a21565b14610b1157565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608490fd5b906041815114600014610baa57610ba6916020820151906060604084015193015160001a90610bb4565b9091565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311610c385791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15610c2b575b81516001600160a01b03811615610c25579190565b50600190565b610c336107fc565b610c10565b5050505060009060039056fea26469706673582212209f0f2236601dda63b2030f6adaaa2e2df4bdb731d94b1450b8c2f1e955a24f5a64736f6c63430008110033";

type EIP4337ManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EIP4337ManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EIP4337Manager__factory extends ContractFactory {
  constructor(...args: EIP4337ManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EIP4337Manager> {
    return super.deploy(
      anEntryPoint,
      overrides || {}
    ) as Promise<EIP4337Manager>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anEntryPoint, overrides || {});
  }
  override attach(address: string): EIP4337Manager {
    return super.attach(address) as EIP4337Manager;
  }
  override connect(signer: Signer): EIP4337Manager__factory {
    return super.connect(signer) as EIP4337Manager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EIP4337ManagerInterface {
    return new utils.Interface(_abi) as EIP4337ManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EIP4337Manager {
    return new Contract(address, _abi, signerOrProvider) as EIP4337Manager;
  }
}