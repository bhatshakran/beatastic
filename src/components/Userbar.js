import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { initiateSearch } from "../redux/features/spotifyslice";

const Userbar = () => {
  const queryValue = useRef();
  const dispatch = useDispatch();

  const searchQuery = () => {
    const val = queryValue.current.value;
    // search for the query
    dispatch(initiateSearch(val));
  };

  return (
    <div className="flex mx-8 mt-8">
      {/* search bar */}
      <input
        ref={queryValue}
        type="text"
        name="search"
        id="search"
        className="form-control"
        placeholder="Search for artists, albums, shows, podcasts"
      />
      <button className="btn" onClick={searchQuery}>
        Search
      </button>
    </div>
  );
};

export default Userbar;
