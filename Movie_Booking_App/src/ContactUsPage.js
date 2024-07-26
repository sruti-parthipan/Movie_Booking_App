
import React from 'react';
import './ContactUs.css';

const ContactUsPage = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your Name" />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Your Email" />
        </label>
        <label>
          Message:
          <textarea placeholder="Your Message"></textarea>
        </label>
        <button type="button">Submit</button>
      </div>
    </div>
  );
};

export default ContactUsPage;
