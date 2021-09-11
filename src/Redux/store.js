import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./movieSlice";
import authReducer from "./Auth/authSlice";
import movieReducer from "./Movie/movieSlice";
import listsReducer from "./Lists/listSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    movie: movieReducer,
    lists: listsReducer,
  },
});
export default store;
