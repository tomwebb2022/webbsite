import React from "react";
import "./App.css";
import Slogan from "./Slogan/slogan";
import b2c from "./images/b2c.png";
import Title from "./Title/title";
import Name from "./Name/name";
import Credits from "./Credits/credits.js";
import Contact from "./Contact/contact.js";
// adding a comment to commit
//testing again
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Slogan />
        <img src={b2c} className="App-logo" alt="logo" />
        <Name />
        <Title />
        <Credits />
        <Contact />
      </header>
    </div>
  );
}
//trying to fix vercel
export default App;
