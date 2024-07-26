

import React from 'react';

const BookingForm = ({ selectedMovie }) => {
  return (
    <div>
      <h2>Booking for {selectedMovie.title}</h2>
    </div>
  );
};

export default BookingForm;
