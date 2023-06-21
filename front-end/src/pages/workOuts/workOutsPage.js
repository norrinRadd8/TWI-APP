import "./workOutsPage.css";
import Nav from "../../components/nav";
import { useEffect } from "react";
import { useWorkoutsContext } from "../../context/hooks/useWorkoutsContext";
import { useAuthContext } from "../../context/hooks/useAuthContext";

// components
import WorkoutDetails from "../../components/WorkoutDetails";
import WorkoutForm from "../../components/WorkoutForm";

const WorkOuts = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }); //on production make sure every request is pointed to the correct end-points
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <>
      <div className="dash-board">
        <h2>Workouts</h2>
      </div>

      <div className="workout-container">
        <div className="workouts">
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
        <WorkoutForm />
      </div>

      <div className="dash-menu-section">
        <Nav />
      </div>
    </>
  );
};

export default WorkOuts;
