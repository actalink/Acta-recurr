import { BigNumber, BigNumberish } from 'ethers';
import { TokenMap } from '../types';
import { utils } from 'ethers';
export function formatTokenAmount(tokenAddress: string, amount: BigInt | BigNumber | BigNumberish, tokens: TokenMap) {
  const tokenDecimal = tokens[tokenAddress]?.decimals ?? 6;
  const tokenAmount = BigNumber.from(amount);
  return parseFloat(utils.formatUnits(tokenAmount, tokenDecimal)).toFixed(2);
}

export function parseTokenAmount(tokenAddress: string, amount: number, tokens: TokenMap) {
  const tokenDecimal = tokens[tokenAddress]?.decimals ?? 6;
  return utils.parseUnits(
    amount.toString(),
    tokenDecimal
  );
}