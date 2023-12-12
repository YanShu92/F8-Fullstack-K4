import { createSlice } from "@reduxjs/toolkit";
import { postTask } from "../middlewares/productMiddleware";
const initialState = {
  status: "idle",
};
export const postTaskSlice = createSlice({
  name: "postTask",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postTask.pending, (state, action) => {
      state.status = "post-pending";
    });
    builder.addCase(postTask.fulfilled, (state, action) => {
      state.status = "post-success";
      console.log(action.payload);
    });
    builder.addCase(postTask.rejected, (state, action) => {
      state.status = "post-error";
    });
  },
});
