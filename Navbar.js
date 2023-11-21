import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" style={{ width: '50px', height: '50px', borderRadius: '20px', marginRight: '1200px', marginLeft: '50px' }}>
            <Link className="btn btn-warning" to="/adminp">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
