import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getArtistById } from "../redux/features/spotifyslice";

const Artist = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = location.pathname;
    const urlArr = url.split("/");
    const id = urlArr[urlArr.length - 1];

    // get artist by id
    dispatch(getArtistById(id));
  }, []);

  return <div>Artist here</div>;
};

export default Artist;
