import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    GetProduct: (state, action) => {
      state.loading=action.payload.loading
      state.data = action.payload.result;

    },
  },
});

export const { GetProduct } = productSlice.actions;
export default productSlice.reducer;
