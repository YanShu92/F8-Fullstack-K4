import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./slice/taskSlice";
import { apiKeySlice } from "./slice/apiKeySlice";
export const store = configureStore({
  reducer: {
    apiKey: apiKeySlice.reducer,
    task: taskSlice.reducer,
  },
});
