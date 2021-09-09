import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const singUp = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const res = await axios
      .post("auth/login", {
        email,
        password,
      })
      .catch((err) => console.log(err));
    return res.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state, action) => {
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    },
    loginSuccess: (state, action) => {
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    },
    loginFailure: (state, action) => {
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    },
    signOut: (state, action) => {
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    },
  },
  extraReducers: {
    [singUp.pending]: (state) => {
      state.isFetching = true;
    },
    [singUp.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
    },
    [singUp.rejected]: (state) => {
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, signOut } =
  authSlice.actions;
export default authSlice.reducer;
