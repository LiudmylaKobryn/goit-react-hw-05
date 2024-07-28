import MovieCard from "../MovieCard/MovieCard";
import s from "./MovieList.module.css";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div className={s.moviesWrapper}>
      <ul className={s.moviesList}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.moviesItem}>
            <Link to={`/movies/${movie.id.toString()}`}>
              <MovieCard movie={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
