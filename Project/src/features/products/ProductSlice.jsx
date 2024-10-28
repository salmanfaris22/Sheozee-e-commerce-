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
      state.data = action.payload;
      console.log(state.data);
    },
  },
});

export const { GetProduct } = productSlice.actions;
export default productSlice.reducer;
