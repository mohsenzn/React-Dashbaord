import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// get MOvies

export const getLists = async (dispatch) => {
  dispatch(getListStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token: `good ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    dispatch(getListSuccess(res.data));
  } catch (error) {
    dispatch(getListFailure());
  }
};

// create movie
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/lists", list, {
      headers: {
        token: `good ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (error) {
    dispatch(createListFailure());
  }
};
// update
// export const UpdateMovie = createAsyncThunk(
//   "movie/createMovie",
//   async (movie) => {
//     const res = await axios
//       .put("/movies", movie, {
//         headers: {
//           token: `good ${JSON.parse(localStorage.getItem("user")).accessToken}`,
//         },
//       })
//       .catch((err) => console.log(err));

//     return res.data;
//   }
// );

// delete Movie
export const deleteLists = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};

export const listSlice = createSlice({
  name: "list",
  initialState: {
    lists: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    createListStart(state) {
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    },
    createListSuccess(state, action) {
      return {
        lists: [...state.lists, action.payload],
        isFetching: false,
        error: false,
      };
    },
    createListFailure(state) {
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    },
    getListStart: (state) => {
      return {
        lists: [],
        isFetching: true,
        error: false,
      };
    },
    getListSuccess(state, action) {
      return {
        lists: action.payload,
        isFetching: false,
        error: false,
      };
    },
    getListFailure() {
      return {
        lists: [],
        isFetching: false,
        error: true,
      };
    },
    deleteListStart(state) {
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    },
    deleteListSuccess(state, action) {
      return {
        lists: state.lists.filter((list) => list._id !== action.payload),
        isFetching: false,
        error: false,
      };
    },
    deleteListFailure(state, action) {
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    },
  },
});

export const {
  getListStart,
  getListSuccess,
  getListFailure,
  deleteListStart,
  deleteListFailure,
  deleteListSuccess,
  createListStart,
  createListSuccess,
  createListFailure,
} = listSlice.actions;
export default listSlice.reducer;
