import React from "react";
import { useSelector } from "react-redux";

const NewAlbums = () => {
  let newalbums = useSelector((state) => state.apidata.newalbums);

  return <div className="mx-8 mt-12">newalbums here!!!!</div>;
};

export default NewAlbums;
