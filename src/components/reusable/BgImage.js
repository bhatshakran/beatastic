import React from "react";

const BgImage = ({ entity }) => {
  const bgstyle = {
    backgroundImage: `url(${entity.images[0].url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    top: 0,
    zIndex: 0,
    width: "100%",
    height: "100%",
    opacity: "20%",
  };

  return <div style={bgstyle}></div>;
};

export default BgImage;
