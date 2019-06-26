import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "../client/components/helpers/ScrollToTop";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
