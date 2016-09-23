import { render } from "react-dom";
import React from "react";
import MainLayout from "./components/MainLayout.jsx";

const containerEl = document.getElementById("main-container");

render(
  <MainLayout/>,
  containerEl
);
