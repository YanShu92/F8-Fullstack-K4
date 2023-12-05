import { createSlice } from "@reduxjs/toolkit";
import { getApiKey } from "../middlewares/productMiddleware";
const initialState = {
  apiKey: localStorage.getItem("apiKey") ? localStorage.getItem("apiKey") : "",
  status: "idle",
};
export const apiKeySlice = createSlice({
  name: "apiKey",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getApiKey.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getApiKey.fulfilled, (state, action) => {
      if (action.payload.code === 400) {
        state.status = "errorMail";
      } else {
        state.status = "success";
        state.apiKey = action.payload.data.apiKey;
        localStorage.setItem("apiKey", action.payload.data.apiKey);
      }
    });
    builder.addCase(getApiKey.rejected, (state, action) => {
      state.status = "error";
    });
  },
});
