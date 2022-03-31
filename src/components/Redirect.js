import React, { useEffect } from "react";
import { getParamValues } from "../utils/functions";
import _ from "lodash";
import { useLocation, useNavigate } from "react-router-dom";

const Redirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (_.isEmpty(location.hash)) {
        return navigate("/dashboard");
      }
      const access_token = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;

      localStorage.setItem("params", JSON.stringify(access_token));
      localStorage.setItem("expiry_time", expiryTime);
      navigate("/dashboard");
    } catch (error) {
      navigate("/");
    }
  }, []);

  return null;
};

export default Redirect;
