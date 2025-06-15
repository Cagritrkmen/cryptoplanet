import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import priceReducer from './priceSlice';
import coinReducer from './coinSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    price: priceReducer,
    coins: coinReducer,
  },
});

export default store; 