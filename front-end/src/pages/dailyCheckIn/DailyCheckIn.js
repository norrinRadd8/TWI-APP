import "./dailycheckin.css";
import "../dashBoard/dashboard.css";

import Nav from "../../components/nav";
import { useEffect, useState } from "react";
import {
  useCheckinContext,
  CheckinContextProvider,
} from "../../context/hooks/useCheckinContext";
import { useAuthContext } from "../../context/hooks/useAuthContext";

// components
import CheckinForm from "../../components/CheckinForm";

const DailyCheckinPage = () => {
  const { checkIns, dispatch } = useCheckinContext();
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true); // New state for loading indicator

  useEffect(() => {
    const fetchCheckIns = async () => {
      try {
        const response = await fetch("/api/daily-checkin", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_CHECKINS", payload: json });
        }
      } catch (error) {
        console.error("Error fetching check-ins:", error);
      } finally {
        setLoading(false); // Set loading state to false
      }
    };

    if (user) {
      fetchCheckIns();
    }
  }, [dispatch, user]);

  // Render a loading indicator while fetching check-ins
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="dash-board">
        <h2>Daily Check-In</h2>
      </div>

      <div className="checkin-container">
        {console.log("checkIns:", checkIns)}
        {Array.isArray(checkIns) &&
          checkIns.map((checkIn) => (
            <div key={checkIn._id} className="checkin-details">
              <p>Sleep Quality: {checkIn.sleepQuality}</p>
              <p>Stress: {checkIn.stress}</p>
              <p>Fatigue: {checkIn.fatigue}</p>
              <p>Energy: {checkIn.energy}</p>
              <p>Muscle Soreness: {checkIn.muscleSoreness}</p>
              <p>Hours of Sleep: {checkIn.hoursOfSleep}</p>
              <p>Check-In Date: {checkIn.checkInDate}</p>
            </div>
          ))}

        <CheckinForm />
      </div>
      <div className="dash-menu-section">
        <Nav />
      </div>
    </>
  );
};

const DailyCheckinPageWithContext = () => {
  return (
    <CheckinContextProvider>
      <DailyCheckinPage />
    </CheckinContextProvider>
  );
};

export default DailyCheckinPageWithContext;
