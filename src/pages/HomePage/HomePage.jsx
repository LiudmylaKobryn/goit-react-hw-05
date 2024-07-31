import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../services/api";
import s from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoad(true);
        const trandingMovies = await getTrendingMovies();
        setMovies(trandingMovies);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoad(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div className={s.wrapper}>
      {load && <div className="globalLoad">Loading...</div>}
      {!load &&
        (error ? (
          <NotFoundPage errorMessage={error} />
        ) : (
          <MovieList movies={movies} />
        ))}
    </div>
  );
};

export default HomePage;
