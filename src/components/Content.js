import _ from "lodash";
import React from "react";
import Categories from "./categories/Categories";
import NewAlbums from "./new releases/NewAlbums";
import Userbar from "./Userbar";

const Content = () => {
  return (
    <div className="w-2/3 h-auto overflow-y-scroll text-white pb-14 md:w-3/4 xl:w-4/5 bg-darkblack">
      <Userbar />
      <h2 className=" font-notulen">Good Afternoon!</h2>
      <Categories />
      <NewAlbums />
    </div>
  );
};

export default Content;
