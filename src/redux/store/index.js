import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "../features/spotifyslice";

export const store = configureStore({
  reducer: {
    apidata: spotifyReducer,
  },
});
