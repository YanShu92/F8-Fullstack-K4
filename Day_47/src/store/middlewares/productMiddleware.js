import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../utils/client";
export const getApiKey = createAsyncThunk("getApiKey", async (email) => {
  const { data } = await client.get(`/api-key?email=${email}`);
  console.log(data);
  return data;
});

export const getTask = createAsyncThunk("getTask", async () => {
  const { data } = await client.get(`/tasks`);
  // const data = await response.json();
  console.log(data);
  return data;
});

export const postTask = createAsyncThunk("postTask", async (body) => {
  const response = await client.post(`/tasks`, body);
  const data = await response.json();
  console.log(data);
  return data;
});
