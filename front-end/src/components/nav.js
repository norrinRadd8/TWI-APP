import { Link } from "react-router-dom";
import { useLogout } from "../context/hooks/useLogout";
import { useAuthContext } from "../context/hooks/useAuthContext";

const Nav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

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
      {user && (
        <div>
          <span>{user.email}</span>
          <button onClick={handleClick}>Log Out</button>
        </div>
      )}
      {!user && (
        <div>
          <Link to="/welcome-back">Login</Link>
        </div>
      )}
    </header>
  );
};

export default Nav;
