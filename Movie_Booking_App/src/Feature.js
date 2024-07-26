// Feature.js
import React from 'react';

const Feature = ({ id, imageUrl, title, description }) => (
  <div className="feature">
    <img src={imageUrl} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Feature;
