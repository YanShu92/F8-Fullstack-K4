import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../middlewares/productMiddleware";
const initialState = {
  listProduct: [],
  status: "idle",
  totalPage: 0,
};
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add: (state, action) => {
      state.listProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.listProduct = action.payload;
      state.totalPage = action.payload.data.totalPage;

      state.status = "success";
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = "error";
    });
  },
});
