import React from "react";
import { useDailyCheckInContext } from "../context/hooks/useDailyCheckInContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const DailyCheckInDetails = ({ dailyCheckIn }) => {
  const { dispatch } = useDailyCheckInContext();

  return (
    <div className="daily-check-in-details">
      <h4>Daily Check-In</h4>
      <p>
        <strong>Sleep Quality: </strong>
        {dailyCheckIn.sleepQuality}
      </p>
      <p>
        <strong>Stress: </strong>
        {dailyCheckIn.stress}
      </p>
      <p>
        <strong>Fatigue: </strong>
        {dailyCheckIn.fatigue}
      </p>
      <p>
        <strong>Energy: </strong>
        {dailyCheckIn.energy}
      </p>
      <p>
        <strong>Muscle Soreness: </strong>
        {dailyCheckIn.muscleSoreness}
      </p>
      <p>
        <strong>Hours of Sleep: </strong>
        {dailyCheckIn.hoursOfSleep}
      </p>
      <p>
        <strong>Check-In Date: </strong>
        {new Date(dailyCheckIn.checkInDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Check-In Date: </strong>
        {formatDistanceToNow(new Date(dailyCheckIn.createdAt), {
          addSuffix: true,
        })}
      </p>
    </div>
  );
};

export default DailyCheckInDetails;
