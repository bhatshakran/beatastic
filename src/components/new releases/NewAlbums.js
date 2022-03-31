import _ from "lodash";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

const NewAlbums = () => {
  let newalbums = useSelector((state) => state.apidata.newalbums);
  let [slidesToShow, setSlides] = useState(window.innerWidth > 1024 ? 4 : 2);

  const releasesSettings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const albumcardsrenderer = () => {
    let { innerWidth: width } = window;
    const { responsive } = releasesSettings;
    if (width < responsive[0].breakpoint) {
      setSlides(responsive[0].settings.slidesToShow);
    } else {
      setSlides(4);
    }
  };

  useLayoutEffect(() => {
    const debouncedrenderer = _.debounce(albumcardsrenderer, 100);
    window.addEventListener("resize", debouncedrenderer);
    // Cleanup
    return (_) => {
      window.removeEventListener("resize", debouncedrenderer);
    };
  }, []);

  return (
    <div className="max-w-full mx-8 mt-12 h-80">
      <div className="flex gap-2 releases_container">
        {newalbums.map((album, id) => {
          if (id < slidesToShow) {
            return (
              <div
                key={album.id}
                className="flex flex-col w-auto h-auto p-4 text-white rounded-md lg:h-72 bg-card lg:w-52"
              >
                <img
                  src={album.images[1].url}
                  alt={album.name}
                  className="rounded-md "
                />
                <h4 className="mt-8 capitalize font-urbanist">{album.name}</h4>
                <h6 className="opacity-60">
                  {album.artists.map((artist, id) => {
                    if (album.artists.length >= 2) {
                      if (id < album.artists.length - 1) {
                        return `${artist.name}, `;
                      } else {
                        return artist.name;
                      }
                    } else {
                      return artist.name;
                    }
                  })}
                </h6>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default NewAlbums;
