import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchResults = ({ data }) => {
  return (
    <div className="srch_results">
      <div className="albums">
        <h3>Albums</h3>
        <ul className="cursor-pointer">
          {data.albums.items.map((album) => {
            return (
              <li className="text-xs text-white" key={album.id}>
                <Link to={`/albums/${album.id}`}> {album.name}</Link>
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
                <Link to={`/artists/${artist.id}`}> {artist.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="playlists">
        <h3>Playlists</h3>
        <ul className="cursor-pointer">
          {data.playlists.items.map((playlist) => {
            return (
              <li className="text-xs text-white" key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}> {playlist.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchResults;
