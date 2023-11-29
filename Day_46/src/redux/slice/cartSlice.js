import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartList: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const index = state.cartList.findIndex(
        ({ _id }) => _id === action.payload._id
      );
      if (index >= 0) {
        state.cartList[index].count++;
      } else {
        const newItem = { ...action.payload, count: 1 };
        state.cartList = [...state.cartList, newItem];
      }
    },
    addLoad: (state, action) => {
      state.cartList = action.payload;
    },
    increment: (state, action) => {
      const index = state.cartList.findIndex(
        ({ _id }) => _id === action.payload._id
      );
      state.cartList[index].quantity--;
      state.cartList[index].count++;
    },
    decrement: (state, action) => {
      const index = state.cartList.findIndex(
        ({ _id }) => _id === action.payload._id
      );
      if (state.cartList[index].count > 1) {
        state.cartList[index].quantity++;
        state.cartList[index].count--;
      }
    },
    checkout: (state, action) => {
      state.cartList = [];
    },
    remove: (state, action) => {
      const newCart = state.cartList.filter(
        ({ _id }) => _id !== action.payload._id
      );
      state.cartList = newCart;
    },
  },
});
