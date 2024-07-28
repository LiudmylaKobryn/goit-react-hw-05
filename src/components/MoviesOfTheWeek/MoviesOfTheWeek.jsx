import { useEffect, useState } from "react";
import { fetchWeekMovies } from "../../services/api";
import MovieList from "../MovieList/MovieList";

const MoviesOfTheWeek = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getWeekMovies = async () => {
      try {
        const movies = await fetchWeekMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getWeekMovies();
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesOfTheWeek;
