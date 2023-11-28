import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../middlewares/productMiddleware";
const initialState = {
  productInfo: [],
  status: "idle",
};
export const productDetailSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, action) => {
      state.productInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.productInfo = action.payload;
      state.status = "success";
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.status = "error";
    });
  },
});
