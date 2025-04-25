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
    // Add more initial assets here
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