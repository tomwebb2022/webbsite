import React from "react";
import "./App.css";
import Slogan from "./Slogan/slogan";
import b2c from "./images/b2c.png";
import Title from "./Title/title";
import Name from "./Name/name";
import Credits from "./Credits/credits.js";
import Contact from "./Contact/contact.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// adding a comment to commit
//testing again
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Slogan className="slogan" />
          <img src={b2c} className="helmet" alt="logo" />
          <Name />
          <Title className="title" />
          <Credits />
          <Contact />
        </header>
      </div>
    </BrowserRouter>
  );
}
//trying to fix vercel
export default App;
