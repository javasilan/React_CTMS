import React, { useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const campusData = [
  {
    name: 'BHUBANESWAR',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.042261124889!2d85.70341077436309!3d20.173965816589728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19af5c436978af%3A0xbfaa629616d14819!2sCenturion%20university!5e0!3m2!1sen!2sin!4v1699891873845!5m2!1sen!2sin',
  },
  {
    name: 'PARALAKHEMUNDI',
   mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.042261124889!2d85.70341077436309!3d20.173965816589728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19af5c436978af%3A0xbfaa629616d14819!2sCenturion%20university!5e0!3m2!1sen!2sin!4v1699891873845!5m2!1sen!2sin',
  },
  {
    name: 'BALASORE',
   mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.042261124889!2d85.70341077436309!3d20.173965816589728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19af5c436978af%3A0xbfaa629616d14819!2sCenturion%20university!5e0!3m2!1sen!2sin!4v1699891873845!5m2!1sen!2sin',
  },
  {
    name: 'BALANGIR',
   mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.042261124889!2d85.70341077436309!3d20.173965816589728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19af5c436978af%3A0xbfaa629616d14819!2sCenturion%20university!5e0!3m2!1sen!2sin!4v1699891873845!5m2!1sen!2sin',
  },
  {
    name: 'RAYAGADA',
   mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.042261124889!2d85.70341077436309!3d20.173965816589728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19af5c436978af%3A0xbfaa629616d14819!2sCenturion%20university!5e0!3m2!1sen!2sin!4v1699891873845!5m2!1sen!2sin',
  },
  {
    name: 'CHATRAPUR',
   mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.042261124889!2d85.70341077436309!3d20.173965816589728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19af5c436978af%3A0xbfaa629616d14819!2sCenturion%20university!5e0!3m2!1sen!2sin!4v1699891873845!5m2!1sen!2sin',
  },
];

const CampusMap = () => {
  const [selectedCampus, setSelectedCampus] = useState(null);

  const handleCampusClick = (index) => {
    setSelectedCampus(index);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3} className="sidebar">
          <h2>CAMPUSE</h2>
          <ul>
            {campusData.map((campus, index) => (
              <li key={index} onClick={() => handleCampusClick(index)}>
                {campus.name}
              </li>
            ))}
          </ul>
        </Col>
        <Col md={9} className="map-container">
          {selectedCampus !== null && (
            <Card>
              <Card.Body>
                <Card.Title>{campusData[selectedCampus].name}</Card.Title>
                <Card.Text>
                  
                  <div style={{ width: '100%', height: '600px' }}>
                    <iframe
                      title={campusData[selectedCampus].name}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      style={{ border: '1' }}
                      src={campusData[selectedCampus].mapLink}
                      allowFullScreen
                    ></iframe>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CampusMap;
