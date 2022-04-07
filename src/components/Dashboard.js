import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories, getNewReleases } from "../redux/features/spotifyslice";
import Content from "./Content";
import Player from "./player/Player";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch new releases
    dispatch(getNewReleases());
    // fetch different categories
    dispatch(getCategories());
    // dispatch(getCategories());
    // fetch random shows
  }, []);

  return (
    <div className="relative flex flex-row w-full h-screen mx-0 overflow-hidden">
      <Content />
      <Player />
    </div>
  );
};

export default Dashboard;
