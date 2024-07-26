// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Home = () => {
  return (
    <div className="Home-page">
      {/* Navigation Bar */}
      <div className="Top-bar">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to BookMyMovie</h1>
          <p>Explore the latest movies and book your tickets with ease!</p>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-box">
          <img src="https://i.pinimg.com/originals/19/60/49/196049a4a1d6e59bd9df20381e819ddb.jpg" alt="Feature 1" />
          <h3>Easy Booking</h3>
          <p>Quick and hassle-free ticket booking process.</p>
        </div>
        <div className="feature-box">
          <img src="https://i.ytimg.com/vi/Jo9yksmQRrk/sddefault.jpg" alt="Feature 2" />
          <h3>Latest Movies</h3>
          <p>Explore a wide range of the latest blockbuster movies.</p>
        </div>
        <div className="feature-box">
          <img src="https://img.freepik.com/free-vector/vector-two-designed-cinema-tickets-close-up-top-view-isolated-white-background_1284-47320.jpg" alt="Feature 3" />
          <h3>Exclusive Offers</h3>
          <p>Enjoy exclusive discounts and offers on ticket bookings.</p>
        </div>
      </section>

      {/* Call-to-Action Button */}
      <Link to="/movieList" className="button">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
