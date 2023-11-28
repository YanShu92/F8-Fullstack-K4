import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slice/productSlice";
import { productDetailSlice } from "./slice/productDetailSlice";
export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    productItem: productDetailSlice.reducer,
  },
});
