import React from "react";

import Header from "./Header";

const Home = () => {
  const handleLogin = () => {
    window.location = `${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&response_type=token&show_dialog=true`;
  };

  return (
    <div className="login bg-slate-200 text-center h-screen">
      <Header />
      <button
        type="submit"
        onClick={handleLogin}
        className="bg-blue-600 p-2 text-white"
      >
        Login using spotify
      </button>
    </div>
  );
};

export default Home;
