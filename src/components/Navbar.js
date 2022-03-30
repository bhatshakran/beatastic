import React from "react";
import logo from "../img/beatastic.svg";

const Navbar = () => {
  return (
    <div className="sidebar">
      {/* logo here */}
      <div className="mx-auto w-28 h-28">
        <img src={logo} alt="" />
      </div>
      {/* music section */}
      <section className="mt-16 music">
        <h3 className="text-gray-400 font-notulen">Music</h3>
        <ul className="text-white">
          <li>Discover</li>
          <li>Songs</li>
          <li>Albums</li>
          <li>Artists</li>
        </ul>
      </section>
      {/* playlists section */}
      <section className="mt-16 playlists">
        <h3 className="text-gray-400 font-notulen">Playlists</h3>
        <ul className="text-white">
          <li>Vibes</li>
          <li>Drill</li>
          <li>Calm</li>
          <li>Bolly</li>
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
