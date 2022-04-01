import _ from "lodash";
import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import withSettings from "../HOC/withSettings";

const Categories = ({ slidesToShow, cardsrenderer }) => {
  const categories = useSelector((state) => state.apidata.categories);

  useLayoutEffect(() => {
    const debouncedrenderer = _.debounce(cardsrenderer, 100);
    window.addEventListener("resize", debouncedrenderer);
    // Cleanup
    return (_) => {
      window.removeEventListener("resize", debouncedrenderer);
    };
  }, []);

  return (
    <div className="flex flex-col items-end gap-2 mx-8 mt-12 h-80 lg:h-64">
      <Link
        to="/dashboard"
        className="text-sm text-gray-400 font-urbanist hover:text-white"
      >
        See All
      </Link>
      <div className="flex w-full h-full gap-2 releases_container">
        {categories.map((cat, id) => {
          if (id < slidesToShow) {
            return (
              <div key={cat.id} className="card ">
                <img
                  src={cat.icons[0].url}
                  alt=""
                  className="rounded-md h-3/4 lg:h-auto"
                />
                <h4 className="mt-8 capitalize font-urbanist">{cat.name}</h4>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default withSettings(Categories);
