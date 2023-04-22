import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <>
      <div
        className="landing-logo"
        style={{
          backgroundImage: "url('./images/main-logo.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

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
