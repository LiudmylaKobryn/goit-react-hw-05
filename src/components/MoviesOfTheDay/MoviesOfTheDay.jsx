import { useEffect, useState } from "react";
import { fetchDayMovies } from "../../services/api";
import MovieList from "../MovieList/MovieList";

const MoviesOfTheDay = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getDayMovies = async () => {
      try {
        const movies = await fetchDayMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getDayMovies();
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesOfTheDay;
