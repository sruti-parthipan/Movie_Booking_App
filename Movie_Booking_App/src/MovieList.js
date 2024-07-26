import React, { useState } from 'react';
import './MovieList.css';

const MovieList = ({ movies, onMovieSelect, onPageChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movie-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {filteredMovies.map((movie) => (
        <div
          key={movie.id}
          className="movie-card"
          onClick={() => {
            onMovieSelect(movie);
            onPageChange('seatSelection');
          }}
        >
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
