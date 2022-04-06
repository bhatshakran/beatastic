import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SpotifyClient } from "../../utils/axios";
import { setAuthHeader } from "../../utils/functions";

export const getArtistById = createAsyncThunk(
  "spotify-api/getartist",
  async (id) => {
    try {
      setAuthHeader();
      const res = await SpotifyClient(`/artists/${id}`);
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
    album: {},
  },
  reducers: {},
  extraReducers: {
    [getArtistById.pending]: (state, action) => {
      state.loading = true;
    },
    [getArtistById.fulfilled]: (state, action) => {
      state.loading = false;
      state.artist = action.payload;
    },
  },
});

export default artistslice.reducer;
