import { Link } from "react-router-dom";
import "../assets/css/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link href="" className="navbar-brand">
          CONTACT MS
        </Link>
      </div>
      <div className="navbar-right">
        <Link href="" className="navbar-link">
          About
        </Link>
        <Link href="" className="navbar-link">
          Login
        </Link>
        <Link href="" className="navbar-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
