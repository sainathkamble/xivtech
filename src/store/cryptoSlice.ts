import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoState, CryptoAsset } from '../types/crypto';

const initialState: CryptoState = {
  assets: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: '/images/btc.png',
      price: 93759.48,
      percentChange1h: 0.43,
      percentChange24h: 0.93,
      percentChange7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      circulatingSupply: 19.85,
      maxSupply: 21,
      chartData: [100, 102, 98, 103, 99, 105, 110],
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      logo: '/images/eth.png',
      price: 1802.46,
      percentChange1h: 0.60,
      percentChange24h: 3.21,
      percentChange7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      circulatingSupply: 120.71,
      maxSupply: null,
      chartData: [100, 105, 103, 107, 105, 108, 112],
    },
    {
      id: 3,
      name: 'Solana',
      symbol: 'SOL',
      logo: '/images/sol.png',
      price: 265.34,
      percentChange1h: 1.25,
      percentChange24h: 4.75,
      percentChange7d: 15.32,
      marketCap: 117853256418,
      volume24h: 9874563210,
      circulatingSupply: 444.16,
      maxSupply: null,
      chartData: [100, 107, 110, 108, 115, 118, 125],
    },
    {
      id: 4,
      name: 'Binance Coin',
      symbol: 'BNB',
      logo: '/images/bnb.png',
      price: 578.92,
      percentChange1h: 0.38,
      percentChange24h: -1.42,
      percentChange7d: 5.87,
      marketCap: 89245673812,
      volume24h: 4561237890,
      circulatingSupply: 154.53,
      maxSupply: 200,
      chartData: [100, 98, 97, 101, 103, 102, 105],
    },
    {
      id: 5,
      name: 'Tether',
      symbol: 'USDT',
      logo: '/images/usdt.png',
      price: 1.00,
      percentChange1h: 0.01,
      percentChange24h: -0.02,
      percentChange7d: 0.03,
      marketCap: 115238964500,
      volume24h: 87562341900,
      circulatingSupply: 115239.25,
      maxSupply: null,
      chartData: [100, 100.01, 99.99, 100.02, 100, 99.98, 100.01],
    },
  ],
  loading: false,
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state, action: PayloadAction<{ id: number; updates: Partial<CryptoAsset> }>) => {
      const { id, updates } = action.payload;
      const asset = state.assets.find(a => a.id === id);
      if (asset) {
        Object.assign(asset, updates);
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { updatePrices, setLoading, setError } = cryptoSlice.actions;
export default cryptoSlice.reducer; 