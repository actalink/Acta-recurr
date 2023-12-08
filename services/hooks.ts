import { Assets } from "../config/data";
import { ITokenInfo } from "../types";

interface AssetMap {
  [key: string]: ITokenInfo;
}

export function useAssets (): AssetMap {
  const assets: AssetMap = {};
  Assets.map((asset) => {
    assets[asset.address] = {
      name: asset.name,
      symbol: asset.symbol,
      decimals: asset.decimals,
      icon: asset.icon,
    };
  });
  return assets;
}