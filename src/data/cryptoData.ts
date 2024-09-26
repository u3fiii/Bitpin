// src/data/cryptoData.ts

export interface Crypto {
  id: string; // Unique identifier for the crypto
  englishName: string; // English name of the crypto
  persianName: string; // Persian name of the crypto
  logo: string; // Path to the logo image
  change: number; // Change in the last 24 hours
  price: number; // Price in Iranian Toman
}

// Import logos directly
import bitcoinLogo from "../assets/crypto_logos/bitcoin.svg";
import ethereumLogo from "../assets/crypto_logos/bitcoin.svg";
import tetherLogo from "../assets/crypto_logos/bitcoin.svg";
import bnbLogo from "../assets/crypto_logos/bitcoin.svg";
import solanaLogo from "../assets/crypto_logos/bitcoin.svg";
import dogecoinLogo from "../assets/crypto_logos/bitcoin.svg";
import xrpLogo from "../assets/crypto_logos/bitcoin.svg";
import litecoinLogo from "../assets/crypto_logos/bitcoin.svg";
import cardanoLogo from "../assets/crypto_logos/bitcoin.svg";
import usdCoinLogo from "../assets/crypto_logos/bitcoin.svg";
import shibaInuLogo from "../assets/crypto_logos/bitcoin.svg";
import tronLogo from "../assets/crypto_logos/bitcoin.svg";
import stellarLogo from "../assets/crypto_logos/bitcoin.svg";
import moneroLogo from "../assets/crypto_logos/bitcoin.svg";
import dashLogo from "../assets/crypto_logos/bitcoin.svg";

// Hardcoded data for popular cryptocurrencies
export const popularCryptos: Crypto[] = [
  {
    id: "bitcoin",
    englishName: "Bitcoin",
    persianName: "بیت کوین",
    logo: bitcoinLogo,
    change: 2.5, // Example change percentage
    price: 5000000, // Example price in Iranian Toman
  },
  {
    id: "ethereum",
    englishName: "Ethereum",
    persianName: "اتریوم",
    logo: ethereumLogo,
    change: -1.2,
    price: 1500000,
  },
  {
    id: "tether",
    englishName: "Tether",
    persianName: "تتر",
    logo: tetherLogo,
    change: 0.0,
    price: 420000,
  },
  {
    id: "bnb",
    englishName: "BNB",
    persianName: "بی ان بی",
    logo: bnbLogo,
    change: 1.8,
    price: 2000000,
  },
  {
    id: "solana",
    englishName: "Solana",
    persianName: "سولانا",
    logo: solanaLogo,
    change: -0.5,
    price: 800000,
  },
];

// Hardcoded data for most profited cryptocurrencies
export const mostProfitedCryptos: Crypto[] = [
  {
    id: "dogecoin",
    englishName: "Dogecoin",
    persianName: "دوج کوین",
    logo: dogecoinLogo,
    change: 5.0,
    price: 50000,
  },
  {
    id: "xrp",
    englishName: "XRP",
    persianName: "ایکس آر پی",
    logo: xrpLogo,
    change: 3.2,
    price: 300000,
  },
  {
    id: "litecoin",
    englishName: "Litecoin",
    persianName: "لایت کوین",
    logo: litecoinLogo,
    change: 4.1,
    price: 1200000,
  },
  {
    id: "cardano",
    englishName: "Cardano",
    persianName: "کاردانو",
    logo: cardanoLogo,
    change: 2.9,
    price: 600000,
  },
  {
    id: "usd-coin",
    englishName: "USD Coin",
    persianName: "یو اس دی کوین",
    logo: usdCoinLogo,
    change: -0.1,
    price: 420000,
  },
];

// Hardcoded data for least profited cryptocurrencies
export const leastProfitedCryptos: Crypto[] = [
  {
    id: "shiba-inu",
    englishName: "Shiba Inu",
    persianName: "شیبا اینو",
    logo: shibaInuLogo,
    change: -3.5,
    price: 15000,
  },
  {
    id: "tron",
    englishName: "Tron",
    persianName: "ترون",
    logo: tronLogo,
    change: -2.8,
    price: 25000,
  },
  {
    id: "stellar",
    englishName: "Stellar",
    persianName: "استلار",
    logo: stellarLogo,
    change: -1.9,
    price: 30000,
  },
  {
    id: "monero",
    englishName: "Monero",
    persianName: "مونرو",
    logo: moneroLogo,
    change: -4.0,
    price: 35000,
  },
  {
    id: "dash",
    englishName: "Dash",
    persianName: "داش",
    logo: dashLogo,
    change: -2.3,
    price: 40000,
  },
];
