import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const query = {
    limit: 16,
    page: 1,
  };
  let queryString = new URLSearchParams(query).toString();
  queryString = queryString ? "?" + queryString : "";
  const response = await fetch(
    `https://api-exercise-sopi.vercel.app/api/v1/products${queryString}`
  );
  const data = await response.json();
  return data;
});

export const getProduct = createAsyncThunk("getProduct", async (id) => {
  const response = await fetch(
    `https://api-exercise-sopi.vercel.app/api/v1/products${id}`
  );
  const data = await response.json();
  return data;
});
