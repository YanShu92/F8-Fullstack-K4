import { client } from "../utils/client";

export const getApiKey = async (email) => {
  const { data } = await client.get(`/api-key?email=${email}`);
  return data;
};
