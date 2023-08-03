import React from "react";
import "./App.css";
import Slogan from "./Slogan/slogan";
import b2k from "./images/b2k.jpg";
import Title from "./Title/title";
import Name from "./Name/name";
import Credits from "./Credits/credits.js";
// adding a comment to commit
//testing again
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Slogan />
        <img src={b2k} className="App-logo" alt="logo" />
        <Name />
        <Title />
        <Credits />
        <a
          className="App-link"
          href="https://www.linkedin.com/in/tomwebb10/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
  );
}
//trying to fix vercel
export default App;
