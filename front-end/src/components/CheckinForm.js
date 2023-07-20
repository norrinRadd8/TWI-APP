import React, { useState } from "react";
import { useAuthContext } from "../context/hooks/useAuthContext";

const CheckinForm = () => {
  const { user } = useAuthContext();

  const [sleepQuality, setSleepQuality] = useState("");
  const [stress, setStress] = useState("");
  const [fatigue, setFatigue] = useState("");
  const [energy, setEnergy] = useState("");
  const [muscleSoreness, setMuscleSoreness] = useState("");
  const [hoursOfSleep, setHoursOfSleep] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitted) {
      setError(
        "You have already submitted. Hit the home button and check in again."
      );
      return;
    }

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const checkinData = {
      sleepQuality,
      stress,
      fatigue,
      energy,
      muscleSoreness,
      hoursOfSleep,
      checkInDate,
    };

    try {
      const response = await fetch("/api/daily-checkin", {
        method: "POST",
        body: JSON.stringify(checkinData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        console.log("Check-in submitted successfully");
        setError(null);
        setSuccess(true);
        setSubmitted(true);
      } else {
        setError(json.error);
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting check-in:", error);
      setError("An error occurred while submitting the check-in");
      setSuccess(false);
    }
  };

  return (
    <form className="check-in" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="checkInDate">Check-In Date:</label>
        <input
          type="date"
          name="checkInDate"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
          required
          className="check-in-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="hoursOfSleep">Hours of Sleep:</label>
        <input
          type="number"
          name="hoursOfSleep"
          value={hoursOfSleep}
          onChange={(e) => setHoursOfSleep(Math.max(0, e.target.value))}
          required
          className="check-in-input"
        />
      </div>

      <label>Sleep Quality: (1 = Awful & 10 = Brilliant)</label>
      <div className="radio-group">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <label key={value} className="radio-button-label">
            <input
              type="radio"
              name="sleepQuality"
              value={value}
              checked={sleepQuality === String(value)}
              onChange={(e) => setSleepQuality(e.target.value)}
            />
            <span className="radio-button-custom">{value}</span>
          </label>
        ))}
      </div>

      <label>Stress: (1 = Stressed & 10 = Relaxed)</label>
      <div className="radio-group">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <label key={value} className="radio-button-label">
            <input
              type="radio"
              name="stress"
              value={value}
              checked={stress === String(value)}
              onChange={(e) => setStress(e.target.value)}
            />
            <span className="radio-button-custom">{value}</span>
          </label>
        ))}
      </div>

      <label>Fatigue: (1 = Lethargic & 10 = Raring To Go)</label>
      <div className="radio-group">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <label key={value} className="radio-button-label">
            <input
              type="radio"
              name="fatigue"
              value={value}
              checked={fatigue === String(value)}
              onChange={(e) => setFatigue(e.target.value)}
            />
            <span className="radio-button-custom">{value}</span>
          </label>
        ))}
      </div>

      <label>Energy: (1 = Lifeless & 10 = Bouncing)</label>
      <div className="radio-group">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <label key={value} className="radio-button-label">
            <input
              type="radio"
              name="energy"
              value={value}
              checked={energy === String(value)}
              onChange={(e) => setEnergy(e.target.value)}
            />
            <span className="radio-button-custom">{value}</span>
          </label>
        ))}
      </div>

      <label>Muscle Soreness: (1 = None & 10 = Very Sore)</label>
      <div className="radio-group">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <label key={value} className="radio-button-label">
            <input
              type="radio"
              name="muscleSoreness"
              value={value}
              checked={muscleSoreness === String(value)}
              onChange={(e) => setMuscleSoreness(e.target.value)}
            />
            <span className="radio-button-custom">{value}</span>
          </label>
        ))}
      </div>

      <button
        className={`check-in-btn ${submitted ? "disabled" : ""}`}
        disabled={submitted}
      >
        Submit
      </button>

      {error && <div className="error">{error}</div>}
      {success && (
        <div className="success">Check-in submitted successfully!</div>
      )}
    </form>
  );
};

export default CheckinForm;
