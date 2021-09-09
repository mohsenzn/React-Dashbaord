import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./movieSlice";
import authReducer from "./Auth/authSlice";
import movieRedcuer from "./Movie/movieSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieRedcuer,
  },
});
export default store;
