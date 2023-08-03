import React from "react";
import "./slogan.css";
/* 
The introduction I will use my 10 second into and talk about my interest in coding and why I wanted to do it in the first place. 

I want to try and link to my linkedin profile and maybe a few other things.
*/

const Slogan = () => {
  return (
    <div className="Slogan-container">
      <div className="Slogan">
        <p className="Slogan">
          {/* IN VIETNAM <br></br> THE WIND<br></br> DOESN'T BLOW<br></br> IT SUCKS */}
          THIS IS MY WEBSITE, <br></br> THERE ARE MANY<br></br> LIKE IT BUT THIS
          <br></br>
          ONE IS MINE
        </p>
      </div>
    </div>
  );
};

export default Slogan;
