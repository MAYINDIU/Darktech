import { baseApi } from "./baseapi";

const alluserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allUser: builder.query({
      query: () => ({
        url: "/users/allUsers",
        method: "GET",
        // headers: {
        //   authorization: `Bearer ${getFromLocalStorage("accessToken")}`,
        // },
      }),
      providesTags: ["users/allUsers"],
    }),
  }), // <-- you missed this closing
});

export const {
  useAllUserQuery, // <-- correct hook name
} = alluserApi;
