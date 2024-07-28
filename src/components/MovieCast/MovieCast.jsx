import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then((data) => setCast(data.cast))
      .catch(console.error);
  }, [movieId]);

  return (
    <div className={s.castContainer}>
      {cast.map((actor) => (
        <div key={actor.id} className={s.actorCard}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
            className={s.actorImage}
          />
          <p className={s.actorName}>{actor.name}</p>
          <p className={s.actorCharacter}>as {actor.character}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCast;
