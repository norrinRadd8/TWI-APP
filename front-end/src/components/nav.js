// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../pages/dashBoard/dashboard.css";

// import { useLogin } from "../context/hooks/useLogin";

const Nav = () => {
  // const { getFirstname } = useLogin(); // Get the getFirstname function

  // useEffect(() => {
  //   // Fetch the firstname after the user is logged in
  //   if (user) {
  //     getFirstname();
  //   }
  // }, [user, getFirstname]);

  return (
    <>
      <div className="container-home">
        <Link to="/">
          <img
            src="./images/icons/icons8-home-96.png"
            alt="home"
            className="icons"
          />
        </Link>
        <div className="dash-section-title">Home</div>
      </div>

      <div className="container-plans">
        <Link to="">
          <img
            src="./images/icons/icons8-calories-100.png"
            alt="home"
            className="icons"
          />
        </Link>
        <div className="dash-section-title">Plans</div>
      </div>

      <div className="container-progress">
        <Link to="">
          <img
            src="./images/icons/icons8-progress-64.png"
            alt="home"
            className="icons"
          />
        </Link>
        <div className="dash-section-title">Progress</div>
      </div>

      <div className="container-workouts">
        <Link to="/work-outs">
          <img
            src="./images/icons/icons8-fitness-50.png"
            alt="home"
            className="icons"
          />
        </Link>
        <div className="dash-section-title">Workouts</div>
      </div>
    </>
  );
};

export default Nav;
