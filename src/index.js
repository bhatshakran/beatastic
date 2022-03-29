import React from 'react';
import ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./index.css";
import AppRouter from "./router/AppRouter";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);

