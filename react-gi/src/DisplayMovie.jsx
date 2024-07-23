import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayMovie = () => {
  const [movies, setMovies] = useState([]);

  const apiKey = '6d122a695627b245abbf8fe1c0c383e3';  
  const url = "https://api.themoviedb.org/3";
  const searchURL = `${url}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(searchURL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies: ', error);
      }
    };

    fetchMovies();
  }, [searchURL]);

  return (
    <div className="movies-container">
      {movies && movies.length > 0 && movies.map((movie) => (
        <div key={movie.id} className="movie">
          <h3>{movie.title}</h3>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-img" />
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayMovie;
