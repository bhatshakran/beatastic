import axios from "axios";

export const SpotifyClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
