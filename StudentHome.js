import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import AppHeader from './AppHeader';
import BusTable from './BusTable';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const StudentHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      
    } else {
      
      const loggedInEmail = sessionStorage.getItem('email'); 

     
      const fetchUserData = async () => {
        try {
          
          const response = await axios.get(`http://localhost:8090/student/${loggedInEmail}`);
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

  return (<>
    <div>
      <AppHeader />
      <div className="container mt-2 p-2">
        <div className="row">
          <div className="col-md-4 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-2">Student Details</h2>
            {user ? (
              <div className="card">
                <div className="card-header">
                  Details of Student: {user.username}
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
                    <b>Branch:</b> {user.branch}
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
          <div className="col-md-8 mt-2">
           
            <BusTable />
          </div>
          <Link to="/rc" className="btn btn-primary mt-2">
                Request Bus
              </Link>

        </div>
      </div>
    </div>
    <div><Footer /></div>
    </>     
  );
};

export default StudentHome;
