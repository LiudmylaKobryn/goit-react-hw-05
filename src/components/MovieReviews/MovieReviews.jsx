import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then((data) => setReviews(data.results))
      .catch(console.error);
  }, [movieId]);

  return (
    <div className={s.reviewsWrapper}>
      <ul className={s.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id} className={s.reviewsItem}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
