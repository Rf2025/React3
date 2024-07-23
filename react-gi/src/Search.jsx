import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CounterCss from './Counter.module.css';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const apiKey = '6d122a695627b245abbf8fe1c0c383e3';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=`;

  const searchMovies = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(url + query);
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div>
      <form onSubmit={searchMovies} className={CounterCss.counterContainer}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={CounterCss.buttonSub}>Search</button>
      </form>
      <div className="movie-list">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} className={CounterCss.buttonContainer}>
              <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <h3>{movie.title}</h3>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchMovies;
