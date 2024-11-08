import { createSlice } from "@reduxjs/toolkit";





const initialState = {
  total_product_sold: 0,
  total_users: 0,
  total_products: 0,
  total_orders:0,
  order_status:[],
  total_profit:0,
  product_analysis:[],
  ProductSales:[],
};

export const dashBoardSlice = createSlice({
  name: 'dasboard',
  initialState,
  reducers: {
    GetDetisls: (state, action) => {
        
        state.total_product_sold=action.payload?.total_product_sold
        state.total_users=action.payload?.total_users
        state.total_products=action.payload?.total_products
        state.total_orders=action.payload?.total_orders
        state.order_status=action.payload?.order_status
        state.total_profit=action.payload?.total_profit
        state.product_analysis=action.payload?.product_analysis
        state.ProductSales=action.payload?.ProductSales

    }
 
  },
});

export const {GetDetisls,Extra} = dashBoardSlice.actions;
export default dashBoardSlice.reducer;
