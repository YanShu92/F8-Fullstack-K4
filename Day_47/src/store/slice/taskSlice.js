import { createSlice } from "@reduxjs/toolkit";
import { getTask } from "../middlewares/productMiddleware";
import { arrayMove } from "../../utils/formatters";
const initialState = {
  columns: [],
  taskList: [],
};
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    dragColumn: (state, action) => {
      state.columns = arrayMove(
        state.columns,
        action.payload.from,
        action.payload.to
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTask.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.status = "success";
      state.columns = action.payload.data.columns;
      state.taskList = action.payload.data.tasks;
    });
    builder.addCase(getTask.rejected, (state, action) => {
      state.status = "error";
    });
  },
});
