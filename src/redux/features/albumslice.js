import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SpotifyClient } from "../../utils/axios";
import { setAuthHeader } from "../../utils/functions";

export const getAlbumById = createAsyncThunk(
  "spotify-api/getalbum",
  async (id) => {
    try {
      setAuthHeader();
      const res = await SpotifyClient(`/albums/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const albumslice = createSlice({
  name: "albumslice",
  initialState: {
    loading: true,
    album: {},
  },
  reducers: {},
  extraReducers: {
    [getAlbumById.pending]: (state, action) => {
      state.loading = true;
    },
    [getAlbumById.fulfilled]: (state, action) => {
      state.loading = false;
      state.album = action.payload;
    },
  },
});

export default albumslice.reducer;
