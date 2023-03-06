import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/fonts.css";
import "./assets/scss/index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./Route";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
