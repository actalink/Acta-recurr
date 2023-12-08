import { ITokenInfo, TokenMap } from '../types';
import superagent from 'superagent';

export function useUserTokens(): TokenMap {
  const tokens: TokenMap = {
    '0x6B175474E89094C44Da98b954EedeAC495271d0F': {
      name: 'Dai Stablecoin',
      symbol: 'DAI',
      decimals: 18,
      icon: 'https://assets.coingecko.com/coins/images/9956/thumb/dai-multi-collateral-mcd.png?1574218774',
    },
    '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984': {
      name: 'Uniswap (UNI)',
      symbol: 'UNI',
      decimals: 18,
      icon: 'https://assets.coingecko.com/coins/images/12504/small/uni.jpg?1696512319',
    },
    '0x5283D291DBCF85356A21bA090E6db59121208b44': {
      name: 'Blur (BLUR)',
      symbol: 'BLUR',
      decimals: 18,
      icon: 'https://assets.coingecko.com/coins/images/28453/small/blur.png?1696527448',
    }
  };
  const goerliTokens: TokenMap = {
    '0x07865c6E87B9F70255377e024ace6630C1Eaa37F': {
      name: 'USD Circle',
      symbol: 'USDC',
      decimals: 6,
      icon: 'https://assets.coingecko.com/coins/images/9956/thumb/dai-multi-collateral-mcd.png?1574218774',
    },
  };
  return goerliTokens;
}