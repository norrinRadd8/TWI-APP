import { Link } from "react-router-dom";
import { useLogout } from "../context/hooks/useLogout";

const Nav = () => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Home</h1>
        </Link>
      </div>
      <div>
        <button onClick={handleClick}>Log Out</button>
      </div>
    </header>
  );
};

export default Nav;
