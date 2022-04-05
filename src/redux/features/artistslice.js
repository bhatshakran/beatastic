import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SpotifyClient } from "../../utils/axios";

export const getArtistById = createAsyncThunk(
  "spotify-api/getartist",
  async (id) => {
    try {
      const res = await SpotifyClient(`/artists/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const getAlbumById = createAsyncThunk(
  "spotify-api/getalbum",
  async (id) => {
    try {
      const res = await SpotifyClient(`/albums/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const artistslice = createSlice({
  name: "artistslice",
  initialState: {
    loading: true,
    artist: {},
    album: {},
  },
  reducers: {},
  extraReducers: {
    [getArtistById.fulfilled]: (state, action) => {
      state.loading = false;
      state.artist = action.payload;
    },
    [getAlbumById.fulfilled]: (state, action) => {
      state.loading = false;
      state.album = action.payload;
    },
  },
});

export default artistslice.reducer;
