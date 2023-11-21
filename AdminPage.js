import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faBus } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import MyVideoCards from './MyVideoCards';
import CampusMap from '../components/CampusMap';

const AdminPage = () => {
  const [requests, setRequests] = useState([]);
  const username = 'ReplaceWithTheUsername'; 

  useEffect(() => {
    
    fetch(`http://localhost:8090/student/route-change-requests/${username}`)
      .then((response) => response.json())
      .then((data) => setRequests(data))
      .catch((error) => console.error('Error fetching requests: ', error));
  }, [username]);

  return (
    <div className="admin-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-white">
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
        <div className="collapse navbar-collapse ml-2" id="navbarNav">
          <img
            src="Images/logo.jpg"
            alt="User Avatar"
            className="user"
            style={{ height:'40px'}}
          />
          <Link
            style={{ textDecoration: 'none' }}
            to={'/login'}
            className="btn btn-danger ml-auto"
          >
            Logout
          </Link>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebar"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
          >
            <div className="position-sticky">
              <ul className="nav flex-column mt-4">
              <li>
                  <h1 className="h3 mb-4"><FontAwesomeIcon icon={faBus} className="mr-2" /> CTMS</h1>
                </li>
                <li>
                  <Link className="nav-link" to={'/adminstudent'}>
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Student
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={'/adminfaculty'}>
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Faculty
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={'/busform'}>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    Add Route
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={'/rr'}>
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    Route Request
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={'/bd'}>
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Add Bus Driver
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={'/btour'}>
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Book Tour
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Hello Admin ! &#128512;</h1>
            </div>
           <div>
            <MyVideoCards/>
            
           </div>
          </main>
        </div>
        <div className='text-center mt-3'>
        <h1>Learn The World @ CENTURION UNIVERSITY</h1>
        <h3>We have campuses in six districts of Odisha</h3>
        <CampusMap />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;