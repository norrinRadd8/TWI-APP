import "./dashboard.css";
import Nav from "../../components/nav";
import { useEffect } from "react";
import { useWorkoutsContext } from "../../context/hooks/useWorkoutsContext";
import { useAuthContext } from "../../context/hooks/useAuthContext";

// components
import WorkoutDetails from "../../components/WorkoutDetails";
import WorkoutForm from "../../components/WorkoutForm";

const Dashboard = () => {
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
    <div className="dash-board">
      <Nav />
      <h2>Dashboard</h2>
      <>
        {/* <div className="grid-container">
          <div className="grid-wrap"> */}
        <div className="dash-container">
          <div className="workouts">
            {workouts &&
              workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} />
              ))}
          </div>
          {/* </div> */}
          <WorkoutForm />
          {/* <div className="grid-wrap">
            <h3>Article 2</h3>
            <h3>Article 2</h3>
            <h3>Article 2</h3>
          </div>
          <div className="grid-wrap">
            <h3>Article 3</h3>
            <h3>Article 3</h3>
            <h3>Article 3</h3>
          </div>
          <div className="grid-wrap">
            <h3>Article 4</h3>
            <h3>Article 4</h3>
            <h3>Article 4</h3>
          </div>
          <div className="grid-wrap">
            <h3>Article 5</h3>
            <h3>Article 5</h3>
            <h3>Article 5</h3>
          </div>
          <div className="grid-wrap">
            <h3>Article 6</h3>
            <h3>Article 6</h3>
            <h3>Article 6</h3>
          </div>
          <div className="grid-wrap">
            <h3>Article 7</h3>
            <h3>Article 7</h3>
            <h3>Article 7</h3>
          </div>
          <div className="grid-wrap">
            <h3>Article 8</h3>
            <h3>Article 8</h3>
            <h3>Article 8</h3>
          </div> */}
          {/* </div> */}
        </div>
      </>
    </div>
  );
};

export default Dashboard;
