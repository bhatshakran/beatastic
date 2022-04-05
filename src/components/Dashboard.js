import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories, getNewReleases } from "../redux/features/spotifyslice";
import Content from "./Content";

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
    <div className="flex flex-row w-full h-screen overflow-x-hidden bg-red-400">
      <Content />
    </div>
  );
};

export default Dashboard;
