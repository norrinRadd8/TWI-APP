import "./landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div
        className="landing-logo"
        style={{
          backgroundImage: "url('./images/main-logo.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="button-wrap">
        <button className="landing-button">GET STARTED</button>
      </div>
      <div className="landing-text-wrap">
        <p className="landing-text">LOGIN</p>
      </div>
    </div>
  );
};

export default Landing;
