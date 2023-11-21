import React from 'react';
import emailjs from 'emailjs-com';
import Navbar from './Navbar';

const ContactPage = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_snzgyps', 'template_bdvbanw', e.target, 'service_snzgyps')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container" style={{ marginTop: '80px' }}>
        <h1 className='text-center mt-3 text-success'>Contact Us</h1>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-paper-plane" /> Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
