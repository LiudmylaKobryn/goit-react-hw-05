import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams, useLocation } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div>
      <div className={s.detailsWrapper}>
        <img src={posterUrl} alt={movie.title} />
        <div className={s.movieDetails}>
          <h2>{movie.original_title}</h2>
          <p>User score: {Math.round((movie.vote_average * 100) / 10)}%</p>
          <p>Overview: {movie.overview}</p>
        </div>
      </div>
      <ul>
        <li>
          <NavLink to={`/movies/${movieId}/cast`} state={{ from: location }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={`/movies/${movieId}/reviews`} state={{ from: location }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
