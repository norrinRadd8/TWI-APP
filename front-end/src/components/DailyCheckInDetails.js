import { useDailyCheckInContext } from "../context/hooks/useDailyCheckInContext";
import { useAuthContext } from "../context/hooks/useAuthContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const DailyCheckInDetails = ({ checkIn }) => {
  const { dispatch } = useDailyCheckInContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }
  };
  return (
    <div className="checkin-details">
      <h4>Daily Check-In</h4>
      <p>
        <strong>Sleep Quality: </strong>
        {checkIn.sleepQuality}
      </p>
      <p>
        <strong>Stress: </strong>
        {checkIn.stress}
      </p>
      <p>
        <strong>Fatigue: </strong>
        {checkIn.fatigue}
      </p>
      <p>
        <strong>Energy: </strong>
        {checkIn.energy}
      </p>
      <p>
        <strong>Muscle Soreness: </strong>
        {checkIn.muscleSoreness}
      </p>
      <p>
        {formatDistanceToNow(new Date(checkIn.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default DailyCheckInDetails;
