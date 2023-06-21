import { useLogout } from "../context/hooks/useLogout";
import { useAuthContext } from "../context/hooks/useAuthContext";
import "../pages/dashBoard/dashboard.css";

const Dashbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <>
      <span className="dashbar-container">
        <div className="dashbar-header">
          <h1>Dashboard</h1>
        </div>
        <div className="dashbar-email">
          {user && (
            <>
              {user.email}
              {/* {user.firstname && <span>{user.firstname}</span>} */}
              <button onClick={handleClick}>Log Out</button>
            </>
          )}
        </div>
      </span>
    </>
  );
};
export default Dashbar;
