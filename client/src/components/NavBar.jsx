import { Link } from "react-router-dom";
import "../assets/css/NavBar.css";
import { useContext } from "react";
import { UserContext } from "../App";

const NavBar = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          CONTACT MS
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/about" className="navbar-link">
          About
        </Link>
        {user ? (
          <>
            <Link to="/login" className="navbar-link">
              Contact
            </Link>
            <Link to="/register" className="navbar-link">
              {user.name}
            </Link>
            <Link to="/login" className="navbar-link">
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">
              Login
            </Link>
            <Link to="/register" className="navbar-link">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
