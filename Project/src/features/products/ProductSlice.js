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
    
      const res =action.payload?.result?.message
      const products = res?.map((e) => ({
        ...e,       
        wislist: false 
    }))
    console.log("h",products)
      state.data = products;
    },
 
  },
});

export const { GetProduct,GetWishlistRedux } = productSlice.actions;
export default productSlice.reducer;
