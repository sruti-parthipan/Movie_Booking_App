
import React, { useState } from 'react';
import './SeatSelection.css';

const SeatSelection = ({ onSeatSelect, onBackClick }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    const index = selectedSeats.indexOf(seat);
    if (index === -1) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      const updatedSeats = [...selectedSeats];
      updatedSeats.splice(index, 1);
      setSelectedSeats(updatedSeats);
    }
  };

  const getRowAlphabet = (index) => String.fromCharCode('A'.charCodeAt(0) + index);

  return (
    <div className="seat-container">
      <div>
        <img src='https://images.assetsdelivery.com/compings_v2/klyaksun/klyaksun2210/klyaksun221000594.jpg' alt='screen' className='screen'/>
      </div>
      <h2>Select Your Seats</h2>
      <div className="seat-grid">
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            <div className="row-alphabet">{getRowAlphabet(rowIndex)}</div>
            {Array.from({ length: 20 }).map((_, colIndex) => {
              const seatNumber = rowIndex * 20 + colIndex + 1;
              const isSelected = selectedSeats.includes(seatNumber);
              return (
                <div
                  key={colIndex}
                  className={`seat ${isSelected ? 'selected' : ''}`}
                  onClick={() => toggleSeat(seatNumber)}
                >
                  {colIndex + 1}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <button onClick={() => onSeatSelect(selectedSeats)}>Confirm Seats</button>
    </div>
  );
};

export default SeatSelection;