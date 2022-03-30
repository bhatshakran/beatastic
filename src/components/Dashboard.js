import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../redux/features/spotifyslice";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch random albums
    // fetch different categories
    // dispatch(getCategories());
    // fetch random shows
  }, []);

  return <div>Dashboard page</div>;
};

export default Dashboard;
