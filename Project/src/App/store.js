import { configureStore } from '@reduxjs/toolkit';
import productSlice  from '../features/products/ProductSlice';


export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});



