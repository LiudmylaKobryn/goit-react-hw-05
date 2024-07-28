import { useEffect, useState } from "react";
import { fetchWeekMovies } from "../../services/api";
import MovieList from "../MovieList/MovieList";
import s from "./MoviesOfWeek.module.css";

const MoviesOfWeek = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchWeekMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div className={s.moviesOfWeek}>
      <h2>Movies of the Week</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesOfWeek;
