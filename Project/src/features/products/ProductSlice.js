import { createSlice } from "@reduxjs/toolkit";





const initialState = {
  data: [],
  loading: false,
  error: null,
  wislist:[]
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    GetProduct: (state, action) => {
      state.loading=action.payload.loading
      state.loading=action.payload.error
      const res =action.payload?.result?.message
      state.data = res;
    },
 
  },
});

export const { GetProduct,GetWishlistRedux } = productSlice.actions;
export default productSlice.reducer;
