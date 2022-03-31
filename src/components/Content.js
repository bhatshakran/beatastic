import React from "react";
import NewAlbums from "./new releases/NewAlbums";
import Userbar from "./Userbar";

const Content = () => {
  return (
    <div className="w-2/3 h-screen text-white md:w-3/4 xl:w-4/5 bg-darkblack">
      <Userbar />
      <h2 className=" font-notulen">Good Afternoon!</h2>
      <NewAlbums />
    </div>
  );
};

export default Content;
