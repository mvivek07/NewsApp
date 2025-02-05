import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const handleLinkClick = () => {
    // Reset progress when navigating between routes
    props.setProgress(0);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
         News Boy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business" onClick={handleLinkClick}>
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment" onClick={handleLinkClick}>
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health" onClick={handleLinkClick}>
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science" onClick={handleLinkClick}>
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports" onClick={handleLinkClick}>
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology" onClick={handleLinkClick}>
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
