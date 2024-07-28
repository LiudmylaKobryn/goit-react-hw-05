import { NavLink, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.moviesWrapper}>
      {movies.map((movie) => (
        <div key={movie.id} className={s.movieCard}>
          <NavLink
            className={s.link}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <h2 className="s.title">{movie.title}</h2>
          </NavLink>
        </div>
      ))}
    </ul>
  );
};

export default MovieList;
