import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <div className="landing-logo">
        <img src="./images/main-logo.svg"></img>
      </div>

      <div className="button-wrap">
        <Link className="landing-button" to="/get-started">
          GET STARTED
        </Link>
      </div>
      <div className="login-wrap">
        <button className="login-button">LOGIN</button>
      </div>
    </>
  );
};

export default Landing;
