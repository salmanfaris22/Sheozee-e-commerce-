import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  cartTotel:0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    TotleCart: (state, action) => {
      console.log("gh",action.payload);
      state.cartTotel=action.payload
    },
  },
});

export const { TotleCart } = cartSlice.actions;
export default cartSlice.reducer;
