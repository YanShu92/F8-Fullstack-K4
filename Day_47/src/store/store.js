import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./slice/taskSlice";
export const store = configureStore({
  reducer: {
    task: taskSlice.reducer,
  },
});
