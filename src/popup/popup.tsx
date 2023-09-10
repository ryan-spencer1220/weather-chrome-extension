import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "fontsource-roboto";
import "./popup.css";
import WeatherCard from "./WeatherCard";

const App: React.FC<{}> = () => {
  return (
    <div className="popup">
      <WeatherCard city="Portland" />
      <WeatherCard city="Seattle" />
      <WeatherCard city="Austin" />
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
