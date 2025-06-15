import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  prices: {}, // { symbol: price }
};

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      const { symbol, price } = action.payload;
      state.prices[symbol] = price;
    },
    resetPrices: (state) => {
      state.prices = {};
    },
  },
});

export const { setPrice, resetPrices } = priceSlice.actions;
export default priceSlice.reducer; 