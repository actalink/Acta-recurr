import { UserOperationStruct } from "@zerodevapp/contracts/dist/types/BaseAccount";

export interface IBundlerParams {
  userOpHash: string;
  userOp: UserOperationStruct;
  entryPoint: string;
  txnStatus: string;
  txnHash: string;
}

export interface ITokenInfo {
  name: string;
  symbol: string;
  decimals: number;
  icon: string;
}

export interface TokenMap {
  [key: string]: ITokenInfo;
}