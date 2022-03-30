import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SpotifyClient } from "../../utils/axios";

export const getCategories = createAsyncThunk("api/getcat", async () => {
  try {
    const res = await SpotifyClient("browse/categories");
    return res.data.categories.items;
  } catch (err) {
    console.log(err);
    return err;
  }
});

export const spotifyslice = createSlice({
  name: "spotifyslice",
  initialState: {
    loading: true,
    albums: [],
    shows: [],
    categories: [],
  },
  reducers: {},
  extraReducers: {
    [getCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
  },
});

export default spotifyslice.reducer;
