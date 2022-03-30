import React from "react";
import NewAlbums from "./new releases/NewAlbums";
import Userbar from "./Userbar";

const Content = () => {
  return (
    <div className="w-full h-screen text-white bg-darkblack">
      <Userbar />
      <h2 className=" font-notulen">Good Afternoon!</h2>
      <NewAlbums />
    </div>
  );
};

export default Content;
