import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { setCredentials, logOut } from "../../Pages/features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.escuelajs.co/api/v1/",
  // baseUrl: "https://dummyjson.com/",

  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// membuat baseQueryWithReauth untuk wrap baseQuery, guna untuk re-attempt ketika baseQuery gagal setelah mengirim refresh token dan mendapat akses token baru. semisal token expired, tapi kita punya current refresh token yang akan mengijinkan kita sebuah akses token baru.

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");

    // send refresh token to get new access token
    const refreshResult = await baseQuery("/refresh-token", api, extraOptions);
    // const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult, user }));
      Cookies.get("token");

      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
