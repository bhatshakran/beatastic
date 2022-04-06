import React, { useEffect, useLayoutEffect, useState } from "react";
import logo from "../img/beatastic.svg";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { GiLoveSong } from "react-icons/gi";
import { BiAlbum, BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

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

  {
    if (iconBar)
      return (
        <div className="relative iconbar">
          {/* logo here */}
          <div className="w-12 h-12 mx-auto">
            <Link to="/dashboard">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="flex flex-col items-center mt-16 cursor-pointer gap-y-8 ">
            <div className="text-4xl hover:text-yellow-400">
              <Link to="/dashboard">
                <RiCompassDiscoverLine />
              </Link>
            </div>
            <div className="text-4xl hover:text-yellow-400">
              <GiLoveSong />
            </div>
            <div className="text-4xl hover:text-yellow-400">
              <BiAlbum />
            </div>
            <div className="text-4xl hover:text-yellow-400"></div>
          </div>
          <div className="absolute text-4xl -translate-x-1/2 cursor-pointer bottom-5 hover:text-yellow-400 left-1/2">
            <BiUserCircle />
          </div>
        </div>
      );
    else
      return (
        <div className="sidebar">
          {/* logo here */}
          <div className="mx-auto w-28 h-28">
            <img src={logo} alt="" />
          </div>
          {/* music section */}{" "}
          <section className="mt-16 music">
            <h3 className="text-yellow-400 font-notulen">Music</h3>
            <ul className="text-white ">
              <li>Discover</li>
              <li>Songs</li>
              <li>Albums</li>
              <li>Artists</li>
            </ul>
          </section>
          {/* playlist section */}
          <section className="mt-16 playlists">
            <h3 className="text-yellow-400 font-notulen">Playlists</h3>
            <ul className="text-white">
              <li>Vibes</li>
              <li>Drill</li>
              <li>Calm</li>
              <li>Bolly</li>
            </ul>
          </section>
        </div>
      );
  }
};

export default Navbar;
