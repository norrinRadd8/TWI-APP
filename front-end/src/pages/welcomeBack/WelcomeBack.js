import "./welcomeback.css";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import { useLogin } from "../../context/hooks/useLogin";

const WelcomeBack = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission
    await login(email, password);
  };

  return (
    <>
      <button className="back-button" onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <p className="form-para welcome-form-para">Welcome back!</p>
          <div className="form-name-wrap">
            <input
              className="form-user-name"
              type="text"
              placeholder="example@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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

          <div>{error && <div className="error">{error}</div>}</div>

          <div className="form-button-wrap">
            <button type="submit" disabled={isLoading}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default WelcomeBack;
