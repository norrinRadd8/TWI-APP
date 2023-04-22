import "./landing.css";

const Landing = () => {
  return (
    <>
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
      <div className="login-wrap">
        <button className="login-button">LOGIN</button>
      </div>
    </>
  );
};

export default Landing;
