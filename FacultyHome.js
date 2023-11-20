import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import Facultynav from './FacultyNav';

const FacultyHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      // Handle this case as needed
    } else {
      // Retrieve the email of the logged-in user from your session or state
      const loggedInEmail = sessionStorage.getItem('email'); // Modify this to fit your authentication logic

      // Function to retrieve user data from the backend using the logged-in email
      const fetchUserData = async () => {
        try {
          // Replace the URL with the appropriate backend endpoint
          const response = await axios.get(`http://localhost:8090/faculty/${loggedInEmail}`);
          if (response.status === 200) {
            setUser(response.data);
          } else {
            console.error("Error fetching user data:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          navigate('/sh');
        }
      };

      fetchUserData();
    }
  }, [location, navigate]);

  return (
    <>
      <div>
        <Facultynav />
      </div>
      <div className="container row mx-md-n4">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-2">User Details</h2>
            {user ? (
              <div className="card">
                <div className="card-header">
                  Details of user: {user.username}
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Username:</b> {user.username}
                  </li>
                  <li className="list-group-item">
                    <b>Email:</b> {user.email}
                  </li>
                  <li className="list-group-item">
                    <b>Phone:</b> {user.phone}
                  </li>
                  <li className="list-group-item">
                    <b>Department:</b> {user.dept} 
                  </li>
                  <li className="list-group-item">
                    <b>Address:</b> {user.address}
                  </li>
                  <li className="list-group-item">
                    <b>Select Route:</b> {user.selectroute}
                  </li>
                  <li className="list-group-item">
                    <b>Gender:</b> {user.gender}
                  </li>
                </ul>
              </div>
            ) : (
              <p>Loading user data...</p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-2">
            <button
              className="btn btn-primary"
              onClick={() => navigate('/rtour')}
            >
                Request
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FacultyHome;
