import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";

const userId =
  "667176894625-dmjjs60hb5e9ekj17ibskpq2gqvg5ikr.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
