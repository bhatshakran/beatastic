import _ from "lodash";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../reusable/Card";

const NewAlbums = () => {
  let newalbums = useSelector((state) => state.apidata.newalbums);
  let initialVal;
  let releasesSettings = {
    responsive: [
      {
        breakpoint: 2800,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      // {
      //   breakpoint: 600,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
    ],
  };

  // Set initial no of slide
  (() => {
    let { innerWidth: width } = window;
    const { responsive } = releasesSettings;

    if (width < responsive[0].breakpoint && width > responsive[1].breakpoint) {
      initialVal = responsive[0].settings.slidesToShow;
    } else if (
      width < responsive[1].breakpoint &&
      width > responsive[2].breakpoint
    ) {
      initialVal = responsive[1].settings.slidesToShow;
    } else if (width < responsive[2].breakpoint) {
      initialVal = responsive[2].settings.slidesToShow;
    } else {
      initialVal = 6;
    }
  })();

  // slidesto show state value

  let [slidesToShow, setSlides] = useState(initialVal);

  // album cards renderer function
  const albumcardsrenderer = () => {
    let { innerWidth: width } = window;
    const { responsive } = releasesSettings;
    if (width < responsive[0].breakpoint && width > responsive[1].breakpoint) {
      setSlides(responsive[0].settings.slidesToShow);
    } else if (
      width < responsive[1].breakpoint &&
      width > responsive[2].breakpoint
    ) {
      setSlides(responsive[1].settings.slidesToShow);
    } else if (width < responsive[2].breakpoint) {
      setSlides(responsive[2].settings.slidesToShow);
    } else {
      setSlides(6);
    }
  };

  // use layout effect

  useLayoutEffect(() => {
    const debouncedrenderer = _.debounce(albumcardsrenderer, 100);
    window.addEventListener("resize", debouncedrenderer);
    // Cleanup
    return (_) => {
      window.removeEventListener("resize", debouncedrenderer);
    };
  }, []);

  // return statement

  return (
    <div className="flex flex-col items-end max-w-full gap-2 mx-8 mt-12 h-80">
      <Link to="/dashboard" className="text-sm text-gray-400 font-urbanist">
        See All
      </Link>
      <div className="flex w-full gap-2 releases_container">
        {newalbums.map((album, id) => {
          if (id < slidesToShow) {
            return <Card album={album} key={album.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default NewAlbums;
