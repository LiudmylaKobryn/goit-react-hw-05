import { useEffect, useState } from "react";
import { getMovieCast } from "../../services/api";
import { useParams } from "react-router-dom";
import Actor from "../Actor/Actor";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const [credits, setCredits] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const data = await getMovieCast(movieId);
        setCredits(data);
      } catch (err) {
        setError(true);
      }
    };
    fetchCredits();
  }, [movieId]);

  if (error) {
    return (
      <div className={s.error}>
        Failed to load movie cast. Please try again later.
      </div>
    );
  }

  return (
    <ul className={s.list}>
      {credits.map((credit) => (
        <Actor
          key={credit.id}
          imgUrl={
            credit.profile_path
              ? `https://image.tmdb.org/t/p/w200/${credit.profile_path}`
              : null
          }
          name={credit.name}
        />
      ))}
    </ul>
  );
};

export default MovieCast;
