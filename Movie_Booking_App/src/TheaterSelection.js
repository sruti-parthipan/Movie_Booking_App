
import React from 'react';

const TheaterSelection = ({ theaters, onTheaterSelect, onNextClick }) => {
  return (
    <div>
      <h2>Select a Theater and Timing</h2>
      <div className="theater-list">
        {theaters.map((theater) => (
          <div key={theater.id} className="theater">
            <h3>{theater.name}</h3>
            <p>{theater.timing}</p>
            <button onClick={() => onTheaterSelect(theater)}>Select</button>
          </div>
        ))}
      </div>
      <button onClick={onNextClick}>Next</button>
    </div>
  );
};

export default TheaterSelection;
