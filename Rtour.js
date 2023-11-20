// src/RtourForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RtourForm = ({ onRtourSubmit }) => {
  const [newRtour, setNewRtour] = useState({
    facultyName: '',
    department: '',
    studyTour: '',
  });

  const handleSubmit = async () => {
    try {
      // Submit a new Rtour to the backend
      const response = await axios.post('http://localhost:8090/faculty/submit-rtour', newRtour);
      console.log(response.data);

      // Clear the form
      setNewRtour({ facultyName: '', department: '', studyTour: '' });
      
      // Trigger the parent component callback
      onRtourSubmit();

      
    } catch (error) {
      console.error('Error submitting Rtour:', error);

     
    }
    // Show a success toast
    toast.success('Rtour submitted successfully');
  };

  return (
    <div className="container mt-3">
      <h2>Submit a New Rtour</h2>
      <div className="mb-3">
        <label className="form-label">Faculty Name:</label>
        <input
          type="text"
          className="form-control"
          value={newRtour.facultyName}
          onChange={(e) => setNewRtour({ ...newRtour, facultyName: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Department:</label>
        <input
          type="text"
          className="form-control"
          value={newRtour.department}
          onChange={(e) => setNewRtour({ ...newRtour, department: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Study Tour:</label>
        <input
          type="text"
          className="form-control"
          value={newRtour.studyTour}
          onChange={(e) => setNewRtour({ ...newRtour, studyTour: e.target.value })}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>Submit Rtour</button>
    </div>
  );
};

export default RtourForm;
