import "./dashboard.css";
import Nav from "../../components/nav";

const Dashboard = () => {
  return (
    <div className="dash-board">
      <Nav />
      <h2>Dashboard</h2>
      <>
        <div className="grid-container">
          <div className="grid-wrap">
            <h3>Article 1</h3>
            <h3>Article 1</h3>
            <h3>Article 1</h3>
          </div>
          <div className="grid-wrap">
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
          </div>
        </div>
      </>
    </div>
  );
};

export default Dashboard;
