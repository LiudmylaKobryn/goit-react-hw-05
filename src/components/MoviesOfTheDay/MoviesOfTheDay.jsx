import { fetchDayMovies } from "../../services/api";
import MovieList from "../MovieList/MovieList";

const MoviesOfTheDay = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    try {
      const getDayMovies = async () => {
        const movies = await fetchDayMovies();
        setMovies(movies);
      };
      getDayMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesOfTheDay;
