import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const spotifyslice = createSlice({
  name: "spotifyslice",
  initialState: {
    albums: [],
    shows: [],
    categories: [],
  },
  reducers: {},
  extraReducers: {},
});

export default spotifyslice.reducer;
