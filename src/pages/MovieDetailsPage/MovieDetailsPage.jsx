import { useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      setLoad(true);
      getMovieById(movieId)
        .then((response) => {
          setMovie(response);
          setLoad(false);
        })
        .catch(() => {
          setError(true);
          setLoad(false);
        });
    } catch {
      setError(true);
      setLoad(false);
    }
  }, [movieId]);

  const makeLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.isActive);
  };

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  return (
    <div>
      {load && <div className="globalLoad">Loading...</div>}
      {!load &&
        (error ? (
          <NotFoundPage />
        ) : (
          <div className={s.wrapper}>
            <NavLink to={backLinkRef.current} className={s.btn}>
              Back
            </NavLink>
            <div className={s.imgWrapper}>
              <img
                className={s.poster}
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
            <div className={s.descr}>
              <p className={s.title}>{movie.original_title}</p>
              <ul className={s.genres}>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <li className={s.genre} key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
              </ul>
              <p className={s.rating}>
                Rating: <span>{movie.vote_average}</span>
              </p>
              <p className={s.overview}>{movie.overview}</p>
            </div>
            <div className={s.nav}>
              <NavLink to="cast" className={makeLinkClass}>
                Actors
              </NavLink>
              <NavLink to="reviews" className={makeLinkClass}>
                Reviews
              </NavLink>
            </div>
            <Outlet />
          </div>
        ))}
    </div>
  );
};

export default MoviesDetailsPage;
