// src/components/MovieList/MovieList.jsx
import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={s.moviesWrapper}>
      {movies.map((movie) => (
        <div key={movie.id} className={s.movieCard}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
