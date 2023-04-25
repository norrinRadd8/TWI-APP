import "./welcomeback.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";

const WelcomeBack = () => {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <button className="back-button" onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="welcome-form-wrap">
        <form onSubmit={handleSubmit}>
          <p className="welcome-form-para">Welcome back!</p>
          <div className="form-name-wrap">
            <input
              className="form-user-name"
              type="text"
              placeholder="example@gmail.com"
              value={userName}
              onChange={(event) => setuserName(event.target.value)}
            />
          </div>
          <div className="form-password-wrap">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="form-button-wrap">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default WelcomeBack;
