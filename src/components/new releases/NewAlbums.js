import _ from "lodash";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import withSettings from "../HOC/withSettings";
import Card from "../reusable/Card";

const NewAlbums = ({ slidesToShow, cardsrenderer }) => {
  let newalbums = useSelector((state) => state.apidata.newalbums);
  // use layout effect

  useLayoutEffect(() => {
    const debouncedrenderer = _.debounce(cardsrenderer, 100);
    window.addEventListener("resize", debouncedrenderer);
    // Cleanup
    return (_) => {
      window.removeEventListener("resize", debouncedrenderer);
    };
  }, []);

  // return statement

  return (
    <div className="flex flex-col items-end max-w-full gap-2 mx-8 mt-12 h-80 lg:h-72">
      <Link
        to="/dashboard"
        className="text-sm text-gray-400 font-urbanist hover:text-white"
      >
        See All
      </Link>
      <div className="flex w-full h-full gap-2 releases_container">
        {newalbums.map((album, id) => {
          if (id < slidesToShow) {
            return <Card album={album} key={album.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default withSettings(NewAlbums);
