import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';

const Facultynav = () => {
  const [displayUsername, setDisplayUsername] = useState('');
  const [showMenu, setShowMenu] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [lastApprovedMessage, setLastApprovedMessage] = useState(null);

  useEffect(() => {
    const email = sessionStorage.getItem('email');
    if (location.pathname === '/login' || location.pathname === '/register') {
      setShowMenu(false);
    } else if (!email) {
      navigate('/login');
    } else {
      setShowMenu(true);
      setDisplayUsername(email);
    }
  }, [location, navigate]);

  useEffect(() => {
    const fetchLatestApprovedRequest = async () => {
      try {
        const response = await fetch('http://localhost:8090/faculty/rtours');
        if (response.ok) {
          const approvedRequests = await response.json();
          if (Array.isArray(approvedRequests) && approvedRequests.length > 0) {
            const latestApprovedRequest = approvedRequests[approvedRequests.length - 1];

            const newApprovedMessage = {
              id: latestApprovedRequest.id,
              message: latestApprovedRequest.requestText
                ? `Request Approved: ${latestApprovedRequest.requestText}`
                : 'Request Approved',
              smsMessages: latestApprovedRequest.smsMessages || [],
            };

            console.log('New Approved Message:', newApprovedMessage);
            setLastApprovedMessage(newApprovedMessage);
          } else {
            // No approved requests, clear the displayed message
            setLastApprovedMessage(null);
          }
        } else {
          console.error('Error fetching approved requests:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching approved requests:', error);
      }
    };

    fetchLatestApprovedRequest();

    const intervalId = setInterval(() => {
      fetchLatestApprovedRequest();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNotificationClick = (smsMessages) => {
    setModalContent(smsMessages.map((sms, index) => `SMS ${index + 1}: ${sms}`).join('\n'));
    setShowModal(true);
  };

  const handleLogout = () => {
    // Clear the displayed message when the user logs out
    setLastApprovedMessage(null);
    // Add your logout logic here
    // ...
  };

  return (
    <div>
      {showMenu && (
        <nav className="navbar navbar-expand-lg navbar-dark bg-white">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="Images/logo.jpg" alt="Logo" style={{ maxWidth: '100px', maxHeight: '50px' }} />
            </Link>
            <div className="d-flex align-items-center">
              <span className="text-dark ml-10">
                Welcome: <b>{displayUsername}</b>
                <FontAwesomeIcon icon={faBell} className="ml-2" />
                {lastApprovedMessage && (
                  <div className="ml-2">
                    <div key={lastApprovedMessage.id} className="notification" onClick={() => handleNotificationClick(lastApprovedMessage.smsMessages)}>
                      {lastApprovedMessage.message}
                    </div>
                  </div>
                )}
              </span>
              <Link to={'/login'} onClick={handleLogout} className="navbar-brand mx-5 btn btn-danger">
                Logout
              </Link>
            </div>
          </div>
        </nav>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Notification Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Facultynav;
