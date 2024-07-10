// import React from 'react'
import { Link } from "react-router-dom";
import {
  FaCubesStacked,
  FaUser,
  FaAddressCard,
  FaRegAddressCard,
  FaPowerOff,
} from "react-icons/fa6";
import "../assets/css/SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaCubesStacked className="top-icon" />
      </div>
      <div className="sidebar-item">
        <Link to="/profile" className="sidebar-link">
          <FaUser className="icon" />
          Profile
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/profile" className="sidebar-link">
          <FaAddressCard className="icon" />
          Contacts
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/profile" className="sidebar-link">
          <FaRegAddressCard className="icon" />
          Add Contact
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/profile" className="sidebar-link">
          <FaPowerOff className="icon" />
          Exit
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
