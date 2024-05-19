import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: { email: null, token: Cookies.get("token"), avatar: null },
  // initialState: { username: null, token: Cookies.get("token"), lastName: null },
  reducers: {
    setCredentials: (state, action) => {
      const { email, access_token, avatar } = action.payload;
      (state.email = email),
        (state.token = access_token),
        (state.avatar = avatar);
      // const { username, token, lastName } = action.payload;
      // (state.username = username),
      //   (state.token = token),
      //   (state.lastName = lastName),
      Cookies.set("token", access_token, { expires: 1, secure: true });
    },
    logOut: (state, action) => {
      state.email = null;
      // state.username = null;
      state.token = null;
      Cookies.remove("token");
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.email;
// export const selectCurrentUser = (state) => state.auth.username;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentAvatar = (state) => state.auth.avatar;
// export const selectCurrentLastName = (state) => state.auth.lastName;
