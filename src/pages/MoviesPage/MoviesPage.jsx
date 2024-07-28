import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");
    if (query) {
      fetchMoviesByQuery(query).then(setMovies).catch(console.error);
    }
  }, [location.search]);

  return (
    <div className={s.moviesPageWrapper}>
      <SearchBar />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
