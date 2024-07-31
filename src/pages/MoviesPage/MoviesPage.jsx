import { useState, useEffect } from "react";
import s from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { getFilerMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const query = params.get("query") ?? "";
    if (!query) {
      return;
    }
    const fetchFilterMovie = async () => {
      try {
        setLoad(true);
        const data = await getFilerMovies(query);
        setMovies(data);
        if (data.length === 0) {
          setError("No movies found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoad(false);
      }
    };
    fetchFilterMovie();
  }, [params]);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim().toLowerCase();
    setMovies([]);
    setError(null);
    setParams({ query: query });
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSearch} className={s.form}>
        <input
          name="query"
          placeholder="Search film or author"
          className={s.input}
          type="text"
        />
        <button className={s.button}>Search</button>
      </form>
      {load && <div className="globalLoad">Loading...</div>}
      {error ? (
        <div className="globalLoad">{error}</div>
      ) : (
        movies.length > 0 && <MovieList movies={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
