import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initiateSearch } from "../redux/features/spotifyslice";
import SearchResults from "./SearchResults";

const Userbar = () => {
  const searchInput = useRef();
  const dispatch = useDispatch();
  let [fetchedResults, setFetchedResults] = useState(false);
  let searchdata = useSelector((state) => state.apidata.searchResults);

  const searchQuery = () => {
    const val = searchInput.current.value;
    // search for the query
    dispatch(initiateSearch(val));
  };

  const close = () => {
    setFetchedResults(false);
  };

  useEffect(() => {
    if (_.size(searchdata)) {
      setFetchedResults(true);
    } else setFetchedResults(false);
  }, [searchdata]);

  return (
    <div className="relative flex mx-8 mt-8">
      {/* search bar */}
      <input
        ref={searchInput}
        type="text"
        name="search"
        id="search"
        className="form-control"
        placeholder="Search for artists, albums, shows, podcasts"
      />
      <button className="btn" onClick={searchQuery}>
        Search
      </button>

      {fetchedResults && <SearchResults data={searchdata} close={close} />}
    </div>
  );
};

export default Userbar;
