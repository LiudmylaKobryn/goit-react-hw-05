import { useEffect, useState } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  Outlet,
} from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie).catch(console.error);
  }, [movieId]);

  const handleGoBack = () => {
    navigate(location.state?.from ?? "/movies");
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className={s.movieDetailsPage}>
      <button onClick={handleGoBack}>Go back</button>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={s.moviePoster}
      />

      <ul>
        <li>
          <Link to="cast" state={{ from: location.state?.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state?.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
