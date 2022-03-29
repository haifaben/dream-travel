import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./assets/carousel-custom.css";
import "./assets/pricing.css";
import "./assets/dashboard.css";
import "./assets/dashboard.rtl.css";
//import "./assets/dashboard.js";
import "./assets/dashboard-custom.css";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { API_URL } from "./params";

import { Provider } from "react-redux";
import store from "./store";

import axios from "axios";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["Content-Type"] = "Application/json";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
