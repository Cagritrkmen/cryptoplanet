import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMarketCoins } from '../services/coinGecko';
import { fetchBinanceUsdtSymbols } from '../services/binanceApi';

export const fetchSupportedCoinsAsync = createAsyncThunk(
  'coins/fetchSupportedCoins',
  async (params = { vs_currency: 'usd', per_page: 250, page: 1 }, { rejectWithValue }) => {
    try {
      const [coins, binanceSymbols] = await Promise.all([
        fetchMarketCoins(params),
        fetchBinanceUsdtSymbols(),
      ]);
      const symbolSet = new Set(binanceSymbols);
      const filtered = coins.filter((c) => symbolSet.has(`${c.symbol.toUpperCase()}USDT`));
      return filtered;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const coinSlice = createSlice({
  name: 'coins',
  initialState: {
    coins: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setCoins: (state, action) => {
      state.coins = action.payload;
    },
    resetCoins: (state) => {
      state.coins = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSupportedCoinsAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSupportedCoinsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coins = action.payload;
      })
      .addCase(fetchSupportedCoinsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setCoins, resetCoins } = coinSlice.actions;
export default coinSlice.reducer; 