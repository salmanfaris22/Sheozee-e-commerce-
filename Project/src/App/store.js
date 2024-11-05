import { configureStore } from '@reduxjs/toolkit';
import productSlice  from '../features/products/ProductSlice';
import cartSlice  from '../features/cart/cart-Slice';


export const store = configureStore({
  reducer: {
    product: productSlice,
    cartItem:cartSlice
  },
});



