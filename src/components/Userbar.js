import React from "react";

const Userbar = () => {
  return (
    <div className="flex mx-8 mt-8">
      {/* search bar */}
      <input
        type="text"
        name="search"
        id="search"
        className="form-control"
        placeholder="Search for artists, albums, shows, podcasts"
      />
      <button className="btn">Search</button>
    </div>
  );
};

export default Userbar;
