import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartList: [],
};
export const taskSlice = createSlice({
  name: "task",
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
  },
});
