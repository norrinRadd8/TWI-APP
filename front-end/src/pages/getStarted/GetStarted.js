import "./getstarted.css";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const GetStarted = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className="form-container">
      <button className="back-button" onClick={() => window.history.back()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <form onSubmit={handleSubmit} className="form-wrap">
        <p className="form-para">
          Please add your details to setup an account.
        </p>
        <div className="form-name-wrap">
          <input
            className="form-name"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="form-lname-wrap">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="form-number-wrap">
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="form-email-wrap">
          <input
            type="email"
            placeholder="Email Address"
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
        <div className="check-container">
          <div className="form-terms-wrap">
            <input
              className="checkbox-design"
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(event) => setTermsAccepted(event.target.checked)}
            />
            <label htmlFor="terms">
              I've read the the terms and conditions
            </label>

            <div className="form-privacy-wrap">
              <input
                className="checkbox-design"
                type="checkbox"
                id="privacy"
                checked={privacyAccepted}
                onChange={(event) => setPrivacyAccepted(event.target.checked)}
              />
              <label htmlFor="privacy">I accept the privacy policy</label>
            </div>
          </div>
        </div>
        <div className="form-button-wrap">
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default GetStarted;