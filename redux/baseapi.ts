
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const getBaseUrl = () => {
    return (
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://back.diamondoilksa.com/api/"
    );
  };
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: (builder) => ({}),
  tagTypes: [
    "users/allUsers",
  ],
});
