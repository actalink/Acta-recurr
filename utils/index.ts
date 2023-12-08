import { SimpleAccount, UserOperationStruct } from "@zerodevapp/contracts";
import { BigNumber, Signer, ethers } from "ethers";
import { hexValue } from "ethers/lib/utils";
import { ERC20, ERC20__factory } from "../typechain-types";
import { frequency } from "../config/data";

export function toJSON(op: Partial<UserOperationStruct>): any {
  return ethers.utils.resolveProperties(op).then((userOp) =>
    Object.keys(userOp)
      .map((key) => {
        let val = (userOp as any)[key];
        if (typeof val !== "string" || !val.startsWith("0x")) {
          val = ethers.utils.hexValue(val);
        }
        return [key, val];
      })
      .reduce(
        (set, [k, v]) => ({
          ...set,
          [k]: v,
        }),
        {}
      )
  );
}

export async function printOp(
  ops: Array<Partial<UserOperationStruct>>
): Promise<Array<string>> {
  return Promise.all(
    ops.map((op) => {
      return toJSON(op).then((userOp: any) => JSON.stringify(userOp, null, 2));
    })
  );
}

export const hexifyUserOp = (resolvedUserOp: any) => {
  return Object.keys(resolvedUserOp)
    .map((key) => {
      let val = resolvedUserOp[key];
      if (typeof val !== "string" || !val.startsWith("0x")) {
        val = hexValue(val);
      }
      return [key, val];
    })
    .reduce(
      (set, [k, v]) => ({
        ...set,
        [k]: v,
      }),
      {}
    );
};

export const encodeERC20Approval = (
  account: SimpleAccount,
  token: ERC20,
  spender: string,
  amount: ethers.BigNumber
) => {
  return account.interface.encodeFunctionData("execute", [
    token.address,
    0,
    token.interface.encodeFunctionData("approve", [spender, amount]),
  ]);
};

export const getFrequencyInMs = (selectedFrequency: string) => {
  if (selectedFrequency === frequency[0].value) {
    return 60000;
  } else if (selectedFrequency === frequency[1].value) {
    return 300000;
  } else if (selectedFrequency === frequency[2].value) {
    return 900000;
  } else if (selectedFrequency === frequency[3].value) {
    return 3600000;
  } else if (selectedFrequency === frequency[4].value) {
    return 86400000;
  } else {
    return 604800000;
  }
};

export const encodeTransferERC20 = async (
  tokenAddress: string,
  signer: Signer,
  recipientAddress: string,
  amount: BigNumber
): Promise<string> => {
  const ERC20 = ERC20__factory.connect(tokenAddress, signer);
  const signerAddress = await signer.getAddress();
  const data = ERC20.interface.encodeFunctionData("transferFrom", [
    signerAddress,
    recipientAddress,
    amount.toString(),
  ]);
  return data;
};

// Shortens an Ethereum address
export function shortenAddress(address = '', charsStart = 4, charsEnd = 4): string {
  const parsed: string | false = ethers.utils.isAddress(address) ? ethers.utils.getAddress(address).toLowerCase() : false;
  if (!parsed) return ''
  return ellipseAddressAdd0x(parsed, charsStart, charsEnd)
}

/**
 * Shorten an address and add 0x to the start if missing
 * @param targetAddress
 * @param charsStart amount of character to shorten (from both ends / in the beginning)
 * @param charsEnd amount of characters to shorten in the end
 * @returns formatted string
 */
function ellipseAddressAdd0x(targetAddress: string, charsStart = 4, charsEnd = 4): string {
  const hasPrefix = targetAddress.startsWith('0x')
  const prefix = hasPrefix ? '' : '0x'
  return ellipseMiddle(prefix + targetAddress, charsStart + 2, charsEnd)
}

/**
 * Shorten a string with "..." in the middle
 * @param target
 * @param charsStart amount of character to shorten (from both ends / in the beginning)
 * @param charsEnd amount of characters to shorten in the end
 * @returns formatted string
 */
function ellipseMiddle(target: string, charsStart = 4, charsEnd = 4): string {
  return `${target.slice(0, charsStart)}...${target.slice(target.length - charsEnd)}`
}