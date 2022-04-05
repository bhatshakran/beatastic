import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getPlaylistById } from "../redux/features/playlistslice";

const Playlist = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  let playlist = useSelector((state) => state.playlistdata.playlist);
  let loading = useSelector((state) => state.playlistdata.loading);
  let [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (mounted) {
      const url = location.pathname;
      const urlArr = url.split("/");
      const id = urlArr[urlArr.length - 1];

      // get artist by id
      dispatch(getPlaylistById(id));
    }

    return () => setMounted(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else
    return (
      <div className="flex flex-col items-center w-full px-12 py-12 overflow-y-scroll bg-darkblack">
        <div className="rounded-full ">
          <img
            src={playlist.images[0].url}
            alt=""
            className="w-48 h-48 rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-16 text-white gap-y-2 font-urbanist">
          <h3 className="">{playlist.name}</h3>
          <h5 className="text-2xl capitalize opacity-60">
            {playlist.owner.display_name}
          </h5>
        </div>
        <div className="flex flex-wrap gap-8 mt-16 text-white">
          <h5 className="text-2xl opacity-80">
            Tracks:{" "}
            <span className="opacity-60"> {playlist.tracks.items.length}</span>
          </h5>
          <h5 className="text-2xl opacity-80">
            Description:{" "}
            <span className="opacity-60"> {playlist.description}</span>
          </h5>
          <h5 className="text-2xl opacity-80">
            Followers:{" "}
            <span className="opacity-60"> {playlist.followers.total}</span>
          </h5>
        </div>
      </div>
    );
};

export default Playlist;