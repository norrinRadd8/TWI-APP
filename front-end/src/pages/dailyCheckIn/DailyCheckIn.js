import { useState, useEffect } from "react";

import { useAuthContext } from "../../context/hooks/useAuthContext";
import Nav from "../../components/nav";
import "./dailycheckin.css";
// import { format } from "date-fns";

// components
// import DailyCheckInDetails from "../../components/DailyCheckInDetails";

const DailyCheckIn = () => {
  const { user } = useAuthContext();

  // State variables for the form inputs and error handling
  const [sleepQuality, setSleepQuality] = useState("");
  const [stress, setStress] = useState("");
  const [fatigue, setFatigue] = useState("");
  const [energy, setEnergy] = useState("");
  const [muscleSoreness, setMuscleSoreness] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch daily check-in data when the component mounts or user changes
    const fetchDailyCheckIn = async () => {
      if (!user) return;

      try {
        const response = await fetch("/api/daily-checkin", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (response.ok) {
          // Handle the fetched data, e.g., update state or perform additional actions
        } else {
          setError("Failed to fetch daily check-in data");
        }
      } catch (error) {
        setError(
          "An error occurred while fetching daily check-in data: " +
            error.message
        );
      }
    };

    fetchDailyCheckIn();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const checkin = {
      sleepQuality,
      stress,
      fatigue,
      energy,
      muscleSoreness,
    };

    console.log("Check-in data:", checkin); // Check the values in the console

    try {
      const response = await fetch("/api/daily-checkin", {
        method: "POST",
        body: JSON.stringify(checkin),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const json = await response.json();

      if (response.ok) {
        setError(null);
        setSleepQuality("");
        setStress("");
        setFatigue("");
        setEnergy("");
        setMuscleSoreness("");
        console.log("New check-in added", json);
        // Perform any additional actions after successful check-in submission
      } else {
        setError(json.error);
      }
    } catch (error) {
      setError(
        "An error occurred while submitting the check-in: " + error.message
      );
    }
  };

  return (
    <>
      <div className="dash-board">
        <h2>Daily Check-In</h2>
      </div>

      <div className="daily-checkin-container">
        <form className="checkin-form" onSubmit={handleSubmit}>
          <h3>Rate your daily experiences:</h3>

          <div className="form-group">
            <label>Sleep Quality:</label>
            <div className="option-container">
              {[...Array(10)].map((_, index) => (
                <label key={index + 1} className="option">
                  <input
                    type="radio"
                    name="sleepQuality"
                    value={index + 1}
                    checked={parseInt(sleepQuality) === index + 1}
                    onChange={(e) => setSleepQuality(e.target.value)}
                  />
                  <span>{index + 1}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Stress:</label>
            <div className="option-container">
              {[...Array(10)].map((_, index) => (
                <label key={index + 1} className="option">
                  <input
                    type="radio"
                    name="stress"
                    value={index + 1}
                    checked={parseInt(stress) === index + 1}
                    onChange={(e) => setStress(e.target.value)}
                  />
                  <span>{index + 1}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Fatigue:</label>
            <div className="option-container">
              {[...Array(10)].map((_, index) => (
                <label key={index + 1} className="option">
                  <input
                    type="radio"
                    name="fatigue"
                    value={index + 1}
                    checked={parseInt(fatigue) === index + 1}
                    onChange={(e) => setFatigue(e.target.value)}
                  />
                  <span>{index + 1}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Energy:</label>
            <div className="option-container">
              {[...Array(10)].map((_, index) => (
                <label key={index + 1} className="option">
                  <input
                    type="radio"
                    name="energy"
                    value={index + 1}
                    checked={parseInt(energy) === index + 1}
                    onChange={(e) => setEnergy(e.target.value)}
                  />
                  <span>{index + 1}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Muscle Soreness:</label>
            <div className="option-container">
              {[...Array(10)].map((_, index) => (
                <label key={index + 1} className="option">
                  <input
                    type="radio"
                    name="muscleSoreness"
                    value={index + 1}
                    checked={parseInt(muscleSoreness) === index + 1}
                    onChange={(e) => setMuscleSoreness(e.target.value)}
                  />
                  <span>{index + 1}</span>
                </label>
              ))}
            </div>
          </div>

          <button>Add Check-In</button>
          {error && <div className="error">{error}</div>}

          <div className="dash-menu-section">
            <Nav />
          </div>
        </form>
      </div>
    </>
  );
};

export default DailyCheckIn;
