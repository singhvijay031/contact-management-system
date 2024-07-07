// import React from 'react'
import "../assets/css/Home.css";

import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <h1 className="home-title">CONTACT MANAGEMENT SYSTEM</h1>
        <p className="home-description">
          Start Collecting your contacs in a very smarter way. We provide very
          efficeint and smarter way to handle contacts.
        </p>
      </div>
    </>
  );
};

export default Home;
