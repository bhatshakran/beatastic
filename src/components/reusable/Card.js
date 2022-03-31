import React from "react";

const Card = ({ album }) => {
  return (
    <div className="card">
      <img src={album.images[1].url} alt={album.name} className="rounded-md " />
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
};

export default Card;
