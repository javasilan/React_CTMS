import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Rchange = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [requestText, setRequestText] = useState('');
  const userEmail = sessionStorage.getItem('email'); 

  const handleRequestSubmit = async (e) => {
    e.preventDefault();

    if (!userEmail) {
      toast.error('User email not found. Please log in.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8090/student/route-change-request', {
        name,
        email,
        requestText,
        requesterEmail: userEmail, 
      });

      if (response.status === 200) {
        toast.success('Route change request submitted successfully');
        navigate('/sh');
      } else {
        console.error("Server response:", response.status, response.statusText, response.data);
        toast.error('Error submitting route change request');
      }
    } catch (error) {
      if (error.response) {
        console.error("Axios error details:", error.response.data);
        toast.error(error.response.data.message || 'An error occurred while submitting the request');
      } else {
        console.error("Error submitting request:", error.message);
        toast.error('An error occurred while submitting the request');
      }
    }
  };

  return (
    <div className="container">
      <Link to={"/sh"} className='mt-2'><h2><i class="fa-solid fa-arrow-left fa-bounce" style={{"color": "#315ec9"}}></i></h2></Link>
      <h2 className="mt-3 text-center">Submit Route Change Request</h2>
      <div className="card p-2 mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <form onSubmit={handleRequestSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="requestText">Request Root:</label>
              <textarea
                id="requestText"
                rows="4"
                cols="50"
                value={requestText}
                onChange={(e) => setRequestText(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rchange;