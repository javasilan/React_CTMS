import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-dark bg-light text-muted mt-5">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center text-dark text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>CENTURION UNIVERSITY
              </h6>
              <p className="text-justify">
                The university and our students must transform societies and communities within which it exists – change begins with us and from within.
                The Centurion survives and thrives on disruptions and relevant innovations to co-create a holistic learning ecosystem.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">CAMPUSES</h6>
              <p>
                <a href="#!" className="text-reset">Bhubaneswar</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Paralakhemundi</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Rayagada</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Balangir</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Balasore</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Chatrapur</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="https://cutm.ac.in" className="text-reset">Official Website</a>
              </p>
              <p>
                <a href="https://cutm.icloudems.com/corecampus/index.php" className="text-reset">MIS/ERP</a>
              </p>
              
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i>
HIG-4, Floor 1 and 2, Jaydev Vihar,Opp Pal Heights, Bhubaneswar, Dist: Khurda, Odisha</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                cutmbbs@cutm.ac.in
              </p>
              <p><i className="fas fa-phone me-3"></i> +91 7978967703</p>
              <p><i className="fas fa-print me-3"></i> +91 8114366678</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: 'black', color: 'white' }}>
              © 2022 Copyright:
              <a className="text-reset fw-bold" href="https://cutm.ac.in/">MCA ST DOMAIN</a>
      </div>

    </footer>
  );
}

export default Footer;
