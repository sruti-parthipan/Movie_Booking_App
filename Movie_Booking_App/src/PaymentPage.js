

import React, { useState } from 'react';

const PaymentPage = ({ selectedMovie, selectedSeats, bookingDetails, onSubmit, onBackClick }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleSubmit = () => {
    
    if (cardNumber && expiryDate && cvv) {
      alert('Payment Successful!\nThank you for your purchase.');
      
      onSubmit();
    } else {
      alert('Please fill in all payment details.');
    }
  };

  return (
    <div>
      <h2>Payment Page</h2>
      {selectedMovie && (
        <p>
          Review your booking details:<br />
          Movie: {selectedMovie.title}<br />
          Seats: {selectedSeats.join(', ')}
        </p>
      )}
      <p>Enter payment details:</p>
      <form>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Expiry Date:
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          CVV:
          <input type="text" value={cvv} onChange={(e) => setCVV(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Pay Now
        </button>
      </form>
      <br />
      <button type="button" onClick={onBackClick}>
        Back to Seat Selection
      </button>
    </div>
  );
};

export default PaymentPage;
