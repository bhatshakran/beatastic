import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SpotifyClient } from "../../utils/axios";
import { setAuthHeader } from "../../utils/functions";

export const getPlaylistById = createAsyncThunk(
  "spotify-api/getplaylist",
  async (id) => {
    try {
      setAuthHeader();
      const res = await SpotifyClient(`/playlists/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const playlistslice = createSlice({
  name: "playlistslice",
  initialState: {
    loading: true,
    playlist: {},
  },
  reducers: {},
  extraReducers: {
    [getPlaylistById.pending]: (state, action) => {
      state.loading = true;
    },
    [getPlaylistById.fulfilled]: (state, action) => {
      state.loading = false;
      state.playlist = action.payload;
    },
  },
});

export default playlistslice.reducer;
