import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "../features/spotifyslice";
import artistReducer from "../features/artistslice";
import albumReducer from "../features/albumslice";

export const store = configureStore({
  reducer: {
    apidata: spotifyReducer,
    artistdata: artistReducer,
    albumdata: albumReducer,
  },
});
