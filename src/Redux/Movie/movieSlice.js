import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// get MOvies
export const getMovies = createAsyncThunk(
  "movie/getMovie",
  async (dispatch) => {
    const res = await axios
      .get("/movies", {
        headers: {
          token: `good ${JSON.parse(localStorage.getItem("user")).accessToken}`,
        },
      })
      .catch((err) => console.log(err));
    return res.data;
  }
);
// create movie
export const createMovie = createAsyncThunk(
  "movie/createMovie",
  async (movie) => {
    const res = await axios
      .post("/movies", movie, {
        headers: {
          token: `good ${JSON.parse(localStorage.getItem("user")).accessToken}`,
        },
      })
      .catch((err) => console.log(err));

    return res.data;
  }
);
// update
export const UpdateMovie = createAsyncThunk(
  "movie/createMovie",
  async (movie) => {
    const res = await axios
      .put("/movies", movie, {
        headers: {
          token: `good ${JSON.parse(localStorage.getItem("user")).accessToken}`,
        },
      })
      .catch((err) => console.log(err));

    return res.data;
  }
);
// delete Movie
export const deleteMovie = createAsyncThunk("movie/deleteMovie", async (id) => {
  try {
    await axios.delete(`/movies/${id}`, {
      headers: {
        token: `good ${JSON.parse(localStorage.getItem("user")).accessToken}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getMovieStart: (state, action) => {
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    },
  },
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.isFetching = true;
    },
    [getMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload;
      state.isFetching = false;
    },
    [getMovies.rejected]: (state) => {
      state.error = true;
    },
    [deleteMovie.pending]: (state) => {
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    },
    [deleteMovie.fulfilled]: (state, action) => {
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload),
        isFetching: true,
        error: false,
      };
    },
    [deleteMovie.rejected]: (state) => {
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    },
    [createMovie.pending]: (state) => {
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    },
    [createMovie.fulfilled]: (state, action) => {
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    },
    [createMovie.rejected]: (state) => {
      return {
        ...state,
        error: true,
      };
    },
  },
});

export const { getMovieStart, getMovieSuccess, getMovieFailure } =
  movieSlice.actions;
export default movieSlice.reducer;
