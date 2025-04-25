export interface CryptoAsset {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
  chartData: number[];
}

export interface CryptoState {
  assets: CryptoAsset[];
  loading: boolean;
  error: string | null;
} 