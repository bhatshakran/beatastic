import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SearchResults = ({ data }) => {
  return (
    <div className="srch_results">
      <div className="albums">
        <h3>Albums</h3>
        <ul className="cursor-pointer">
          {data.albums.items.map((album) => {
            return (
              <li className="text-xs text-white" key={album.id}>
                {album.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="artists">
        <h3>Artists</h3>
        <ul className="cursor-pointer">
          {data.artists.items.map((artist) => {
            return (
              <li className="text-xs text-white" key={artist.id}>
                {artist.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="playlists">
        <h3>Playlists</h3>
        <ul className="cursor-pointer">
          {data.albums.items.map((playlist) => {
            return (
              <li className="text-xs text-white" key={playlist.id}>
                {playlist.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
