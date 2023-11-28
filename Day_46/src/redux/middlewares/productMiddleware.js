import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("getProducts", async (page = 1) => {
  const query = {
    limit: 16,
    page: page,
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
    `https://api-exercise-sopi.vercel.app/api/v1/products/${id}`
  );
  const data = await response.json();
  return data;
});
