import React, { useState } from "react";
import { useAuthContext } from "../context/hooks/useAuthContext";

const CheckinForm = () => {
  const { user } = useAuthContext();

  const [sleepQuality, setSleepQuality] = useState("");
  const [stress, setStress] = useState("");
  const [fatigue, setFatigue] = useState("");
  const [energy, setEnergy] = useState("");
  const [muscleSoreness, setMuscleSoreness] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      <h3>Daily Check-In</h3>

      <label>Sleep Quality:</label>
      <div className="radio-group">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="sleepQuality"
              value={value}
              checked={sleepQuality === String(value)}
              onChange={(e) => setSleepQuality(e.target.value)}
            />
            {value}
          </label>
        ))}
      </div>

      <label>Stress:</label>
      <div className="radio-group">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="stress"
              value={value}
              checked={stress === String(value)}
              onChange={(e) => setStress(e.target.value)}
            />
            {value}
          </label>
        ))}
      </div>

      <label>Fatigue:</label>
      <div className="radio-group">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="fatigue"
              value={value}
              checked={fatigue === String(value)}
              onChange={(e) => setFatigue(e.target.value)}
            />
            {value}
          </label>
        ))}
      </div>

      <label>Energy:</label>
      <div className="radio-group">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="energy"
              value={value}
              checked={energy === String(value)}
              onChange={(e) => setEnergy(e.target.value)}
            />
            {value}
          </label>
        ))}
      </div>

      <label>Muscle Soreness:</label>
      <div className="radio-group">
        {Array.from({ length: 10 }, (_, index) => index + 1).map((value) => (
          <label key={value}>
            <input
              type="radio"
              name="muscleSoreness"
              value={value}
              checked={muscleSoreness === String(value)}
              onChange={(e) => setMuscleSoreness(e.target.value)}
            />
            {value}
          </label>
        ))}
      </div>

      <button>Submit</button>
      {error && <div className="error">{error}</div>}
      {success && (
        <div className="success">Check-in submitted successfully!</div>
      )}
    </form>
  );
};

export default CheckinForm;
