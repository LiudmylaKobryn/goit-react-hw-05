import { useEffect, useState } from "react";
import { fetchDayMovies } from "../../services/api";
import MovieList from "../MovieList/MovieList";
import s from "./MoviesOfDay.module.css";

const MoviesOfDay = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchDayMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <div className={s.moviesOfDay}>
      <h2>Movies of the Day</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesOfDay;
