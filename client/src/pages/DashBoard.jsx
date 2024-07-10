// import React from 'react'
import "../assets/css/DashBoard.css";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const DashBoard = () => {
  return (
    <>
      <NavBar />
      <div className="dashboard">
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="contact-container">
          <h1>Content</h1>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
