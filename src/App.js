import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App ">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Samitola/portfolio-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sami Mogaji
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Samitola/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open sourced on github
          </a>{" "}
          and{" "}
          <a
            href="https://hilarious-chimera-8513b2.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
