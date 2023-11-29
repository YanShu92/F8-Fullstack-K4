import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slice/productSlice";
import { productDetailSlice } from "./slice/productDetailSlice";
import { cartSlice } from "./slice/cartSlice";
export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    productItem: productDetailSlice.reducer,
    cart: cartSlice.reducer,
  },
});
