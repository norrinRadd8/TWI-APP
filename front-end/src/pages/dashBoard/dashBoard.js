import "./dashboard.css";
import Nav from "../../components/nav";
import { Link } from "react-router-dom";
import Dashbar from "../../components/dashBar";

// components

const Dashboard = () => {
  return (
    <>
      <>
        <Dashbar />
      </>

      <div className="dash-container">
        <div className="dash-section-one">
          <Link to="/work-outs">
            <img
              src="./images/icons/icons8-check-inbox-80.png"
              alt="Workouts"
              className="icon"
            />
          </Link>
          <div className="dash-section-title">Daily Check-in</div>
        </div>

        <div className="dash-section-one">
          <Link to="/work-outs">
            <img
              src="./images/icons/icons8-log-80.png"
              alt="Workouts"
              className="icon"
            />
          </Link>
          <div className="dash-section-title">Check-in</div>
        </div>

        <div className="dash-section-one">
          <Link to="/work-outs">
            <img
              src="./images/icons/icons8-cardio-100.png"
              alt="Workouts"
              className="icon"
            />
          </Link>
          <div className="dash-section-title">Cardio & Steps</div>
        </div>

        <div className="dash-section-one">
          <Link to="/work-outs">
            <img
              src="./images/icons/icons8-vault-68.png"
              alt="Workouts"
              className="icon"
            />
          </Link>
          <div className="dash-section-title">The Vault</div>
        </div>

        <div className="dash-section-one">
          <Link to="/work-outs">
            <img
              src="./images/icons/icons8-chat-96.png"
              alt="Workouts"
              className="icon"
            />
          </Link>
          <div className="dash-section-title">Chat</div>
        </div>

        <div className="dash-section-one">
          <Link to="/work-outs">
            <img
              src="./images/icons/icons8-calendar-80.png"
              alt="Workouts"
              className="icon"
            />
          </Link>
          <div className="dash-section-title">Calendar</div>
        </div>
      </div>

      <div className="dash-menu-section">
        <Nav />
      </div>
    </>
  );
};

export default Dashboard;
