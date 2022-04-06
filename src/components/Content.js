import _ from "lodash";
import React from "react";
import Categories from "./categories/Categories";
import NewAlbums from "./new releases/NewAlbums";
import Userbar from "./Userbar";

const Content = () => {
  return (
    <div className="w-full h-screen overflow-y-scroll text-white bg-darkblack pb-14">
      <Userbar />
      <h2 className=" font-notulen">Good Afternoon!</h2>
      <Categories />
      <NewAlbums />
    </div>
  );
};

export default Content;
