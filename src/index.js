import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Timer from "./timer.js";
const Timerstatic = () => (
  <div>
    <Timer Hourstimer="12" Minutesstimer="35" secondstimer="23" />

    <Timer Hourstimer="10" Minutesstimer="15" secondstimer="24" />

    <Timer Hourstimer="1" Minutesstimer="5" secondstimer="25" />

    <Timer Hourstimer="2" Minutesstimer="45" secondstimer="27" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Timerstatic />, rootElement);
