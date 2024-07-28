import s from "./MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const rating = Math.round((100 * movie.vote_average) / 10);
  return (
    <div className={s.MovieCard}>
      <img src={posterUrl} alt={movie.title} className={s.Poster} />
      <div className={s.movieInfo}>
        <h3 className={s.title}>{movie.title}</h3>
        <p className={s.date}>{movie.release_date}</p>
        <span className={s.rating}>{rating}%</span>
      </div>
    </div>
  );
};

export default MovieCard;
