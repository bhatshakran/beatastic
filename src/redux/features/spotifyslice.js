import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SpotifyClient } from "../../utils/axios";

export const getCategories = createAsyncThunk(
  "spotify-api/getcat",
  async () => {
    try {
      const res = await SpotifyClient("browse/categories");
      return res.data.categories.items;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const getUserAlbums = createAsyncThunk(
  "spotify-api/getuseralbums",
  async () => {
    try {
      const res = await SpotifyClient("me/albums/contains");
      return res;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const getNewReleases = createAsyncThunk(
  "spotify-api/getnewreleases",
  async () => {
    try {
      const res = await SpotifyClient("browse/new-releases");
      return res.data.albums.items;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const spotifyslice = createSlice({
  name: "spotifyslice",
  initialState: {
    loading: true,
    albums: [],
    shows: [],
    categories: [],
    newalbums: [],
  },
  reducers: {},
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    [getNewReleases.fulfilled]: (state, action) => {
      state.loading = false;
      state.newalbums = action.payload;
    },
  },
});

export default spotifyslice.reducer;
