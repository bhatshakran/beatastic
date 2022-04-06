import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAlbumById } from "../redux/features/albumslice";

const Album = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  let album = useSelector((state) => state.albumdata.album);
  let loading = useSelector((state) => state.albumdata.loading);
  let [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (mounted) {
      const url = location.pathname;
      const urlArr = url.split("/");
      const id = urlArr[urlArr.length - 1];

      // get artist by id
      dispatch(getAlbumById(id));
    }

    return () => setMounted(false);
  }, []);
  console.log(loading);

  if (loading) {
    return <div>Loading...</div>;
  } else
    return (
      <div className="flex flex-col items-center w-full px-12 py-12 overflow-y-scroll bg-darkblack">
        <div className="rounded-full ">
          <img
            src={album.images[0].url}
            alt=""
            className="w-48 h-48 rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-16 text-white gap-y-2 font-urbanist">
          <h3 className="">{album.name}</h3>
          <h5 className="text-2xl capitalize opacity-60">{album.type}</h5>
        </div>
        <div className="flex flex-wrap gap-8 mt-16 text-white">
          <h5 className="text-2xl text-yellow-400 opacity-80">
            Tracks:{" "}
            <span className="text-white opacity-60">
              {" "}
              {album.tracks.items.length}
            </span>
          </h5>
          <h5 className="text-2xl text-yellow-400 opacity-80">
            Label: <span className="text-white opacity-60"> {album.label}</span>
          </h5>
          <h5 className="text-2xl text-yellow-400 opacity-80">
            Popularity:{" "}
            <span className="text-white opacity-60"> {album.popularity}</span>
          </h5>
          <h5 className="text-2xl text-yellow-400 opacity-80">
            Release Date:{" "}
            <span className="text-white opacity-60"> {album.release_date}</span>
          </h5>

          <div className="flex flex-row flex-wrap gap-4">
            <h5 className="text-2xl text-yellow-400 opacity-80">Artists: </h5>
            {album.artists.map((artist, idx) => {
              return (
                <h5 className="text-2xl capitalize opacity-60" key={idx}>
                  {artist.name}
                </h5>
              );
            })}
          </div>
        </div>
      </div>
    );
};

export default Album;
