import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import Notfound from "../components/Notfound";
import Redirect from "../components/Redirect";

const AppRouter = () => {
  return (
    <Router>
      <div className=" app">
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
