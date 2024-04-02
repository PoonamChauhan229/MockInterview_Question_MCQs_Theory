import React from 'react';
import zenlogo from '../assets/logo.png';

const Navbar = ({ scores }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={zenlogo} alt="" height="35" />
          <span className="navbar-brand mb-0 h1">Mock Interview</span>
        </a>
        {scores != null && (
          <div className="navbar-text pe-5"><h6>Score: {scores}</h6></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
