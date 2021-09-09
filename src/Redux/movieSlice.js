import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
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
    logout: (state) => {
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    },
    updateStart: (state, action) => {
      return {
        ...state,
        isFetching: true,
      };
    },
    updateSuccess: (state, action) => {
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    },
    updateFailure: (state, action) => {
      return {
        user: state.user,
        isFetching: false,
        error: true,
      };
    },
  },
});

export const {
  loginStart,
  loginFailure,
  loginSuccess,
  updateFailure,
  logout,
  updateSuccess,
  updateStart,
} = loginSlice.actions;

export default loginSlice.reducer;
