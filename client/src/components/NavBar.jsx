import { Link } from "react-router-dom";
import "../assets/css/NavBar.css";

const NavBar = () => {
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
        <Link to="/login" className="navbar-link">
          Login
        </Link>
        <Link to="/register" className="navbar-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
