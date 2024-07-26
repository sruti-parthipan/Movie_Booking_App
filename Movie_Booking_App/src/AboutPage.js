// AboutUs.js

import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="section">
        <h2>Introduction</h2>
        <p> Welcome to BookMyMovie, where we bring the magic of cinema to your fingertips. Our mission
          is to provide a seamless and enjoyable movie-booking experience for every cinephile.</p>
      </div>

      <div className="section">
        <h2>Our Team</h2>
        <p>  Meet the passionate individuals behind BookMyMovie who work tirelessly to bring you the
          latest and greatest in cinema. From developers to designers, our team is dedicated to
          making your movie journey unforgettable.</p>
      </div>

      <div className="section">
        <h2>Our Mission</h2>
        <p> At BookMyMovie, we aim to revolutionize the way you experience movies. Our mission is to
          provide a user-friendly platform, a diverse selection of films, and exclusive perks for
          our users. We believe in making movie-watching not just an activity but an experience..</p>
      </div>

      <div className="section">
        <h2>Community Engagement</h2>
        <p>   Become a part of the BookMyMovie community and stay updated on the latest releases,
          exclusive offers, and cinema news. Follow us on social media and join the conversation.</p>
      </div>
    </div>
  );
};

export default AboutUs;
