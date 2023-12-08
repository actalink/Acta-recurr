import USDT from "../assets/usdt.svg";
import USDC from "../assets/usdc.svg";
import DAI from "../assets/dai.svg";

interface IAsset {
  name: string;
  symbol: string;
  icon: string;
  address: string;
  decimals: number;
}

export const Assets: Array<IAsset> = [
  {
    name: "USDT",
    symbol: "USDT",
    icon: USDT,
    address: process.env.NEXT_PUBLIC_USDT_ADDRESS!,
    decimals: 18,
  },
  {
    name: "USDC",
    symbol: "USDC",
    icon: USDC,
    address: process.env.NEXT_PUBLIC_USDC_ADDRESS!,
    decimals: 6,
  },
  {
    name: "DAI",
    symbol: "DAI",
    icon: DAI,
    address: process.env.NEXT_PUBLIC_DAI_ADDRESS!,
    decimals: 18,
  },
];

export const frequency = [
  {
    name: "1min",
    value: "1min",
  },
  {
    name: "5mins",
    value: "5mins",
  },
  {
    name: "15mins",
    value: "15mins",
  },
  {
    name: "Hourly",
    value: "Hourly",
  },
  {
    name: "Daily",
    value: "daily",
  },
  {
    name: "Weekly",
    value: "weekly",
  },
];

export const partners = [
  {
    name: "MoonPay",
    amount:'12.22 Ethereum',
    amountConverted:'$2524 USD'
  },
  {
    name: "Ramp",
    amount:'12.22 Ethereum',
    amountConverted:'$2524 USD'
  },
  {
    name: "Mercuryo",
    amount:'12.22 Ethereum',
    amountConverted:'$2524 USD'
  },
  {
    name: "Banxa",
    amount:'12.22 Ethereum',
    amountConverted:'$2524 USD'
  },
  {
    name: "Transak",
    amount:'12.22 Ethereum',
    amountConverted:'$2524 USD'
  },
  {
    name: "Crypto",
    amount:'12.22 Ethereum',
    amountConverted:'$2524 USD'
  }
]