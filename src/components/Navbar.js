import React, { useEffect, useLayoutEffect, useState } from "react";
import logo from "../img/beatastic.svg";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { GiLoveSong } from "react-icons/gi";
import { BiAlbum } from "react-icons/bi";

const Navbar = () => {
  let initialVal;
  let { innerWidth: width } = window;

  if (width < 768) {
    initialVal = true;
  } else initialVal = false;

  let [iconBar, setIconBar] = useState(initialVal);

  const changeBar = () => {
    let { innerWidth: width } = window;
    if (width <= 768) {
      setIconBar(true);
    } else setIconBar(false);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", changeBar);
    // Cleanup
    return (_) => {
      window.removeEventListener("resize", changeBar);
    };
  }, []);

  return (
    <div className="sidebar">
      {/* logo here */}
      <div className="mx-auto w-28 h-28">
        <img src={logo} alt="" />
      </div>
      {/* music section */}

      {iconBar ? (
        <div>Loading..</div>
      ) : (
        <>
          {" "}
          <section className="mt-16 music">
            <h3 className="text-gray-400 font-notulen">Music</h3>
            <ul className="text-white ">
              <li>Discover</li>
              <li>Songs</li>
              <li>Albums</li>
              <li>Artists</li>
            </ul>
          </section>
          <section className="mt-16 playlists">
            <h3 className="text-gray-400 font-notulen">Playlists</h3>
            <ul className="text-white">
              <li>Vibes</li>
              <li>Drill</li>
              <li>Calm</li>
              <li>Bolly</li>
            </ul>
          </section>
        </>
      )}
    </div>
  );
};

export default Navbar;
