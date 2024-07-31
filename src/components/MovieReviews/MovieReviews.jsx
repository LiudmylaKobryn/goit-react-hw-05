import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReview } from "../../services/api";
import Review from "../Review/Review";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getMovieReview(movieId);
        setReviews(data);
      } catch (err) {
        setError(true);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <ul className={s.list}>
      {error ? (
        <div className={s.error}>
          Failed to load reviews. Please try again later.
        </div>
      ) : reviews.length > 0 ? (
        reviews.map((review) => (
          <Review
            key={review.id}
            content={review.content}
            name={review.author_details.username}
          />
        ))
      ) : (
        "No reviews yet"
      )}
    </ul>
  );
};

export default MovieReviews;
