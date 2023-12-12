import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./slice/taskSlice";
import { apiKeySlice } from "./slice/apiKeySlice";
import { postTaskSlice } from "./slice/postTaskSlice";
export const store = configureStore({
  reducer: {
    apiKey: apiKeySlice.reducer,
    task: taskSlice.reducer,
    postTask: postTaskSlice.reducer,
  },
});
