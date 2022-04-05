import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getArtistById } from "../redux/features/spotifyslice";

const Artist = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.apidata.artist);
  const loading = useSelector((state) => state.apidata.loading);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    if (mounted) {
      const url = location.pathname;
      const urlArr = url.split("/");
      const id = urlArr[urlArr.length - 1];

      // get artist by id
      dispatch(getArtistById(id));
    }

    return () => setMounted(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else
    return (
      <div className="flex flex-col items-center w-full px-12 py-12 bg-darkblack">
        <div className="rounded-full ">
          <img
            src={artist.images[0].url}
            alt=""
            className="w-48 h-48 rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-16 text-white gap-y-2 font-urbanist">
          <h3 className="">{artist.name}</h3>
          <h5 className="text-2xl capitalize opacity-60">{artist.type}</h5>
        </div>
        <div className="flex flex-wrap gap-8 mt-16 text-white">
          <h5 className="text-2xl opacity-80">
            Popularity: {artist.popularity}
          </h5>
          <h5 className="text-2xl opacity-80">
            Followers: {artist.followers.total}
          </h5>

          {artist.genres.map((genre, idx) => {
            return (
              <h5 className="text-2xl capitalize opacity-80" key={idx}>
                {genre}
              </h5>
            );
          })}
        </div>
      </div>
    );
};

export default Artist;
