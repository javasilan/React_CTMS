import React from 'react';

const MyVideoCards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card bg-dark text-white w-100 d-flex">
            <iframe
              title="Embedded Video"
              src="https://www.clocktab.com/"
              frameBorder="0"
              style={{ width: '100%', height: '400px' }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card bg-dark text-white w-100">
            <div style={{ width: '100%' }}>
              <div style={{ height: '0', paddingBottom: '56.25%', position: 'relative', width: '100%' }}>
                <iframe
                  allowFullScreen
                  frameBorder="0"
                  height="100%"
                  src="https://giphy.com/embed/MnTLI38kALngEppmcE/video"
                  style={{ left: '0', position: 'absolute', top: '0', width: '100%', height: '400px' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyVideoCards;
