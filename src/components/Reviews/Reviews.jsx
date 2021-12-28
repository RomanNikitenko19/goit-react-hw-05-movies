import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../services/api";
import LoaderSpinner from "../LoaderSpinner";
import Title from "../Title";
import s from './Reviews.module.css';

const Reviews = () => {
  // const [reviews, setReviews] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!movieId) return;

        const data = await api.reviewsForAMovie(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, [movieId]);

  return (
    <>
      <div className={s.container}>
        {loading && <LoaderSpinner />}
        {error && <Title title={error} />}
        {reviews.length
          ? (<ul className={s.list}>
            {reviews.map(({id, author, content}) => (
              <li key={id} className={s.item}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ))}</ul>)
          : (<Title title="We don't have any revievs for this movie" />)
        }
        {/* {reviews && reviews.length ? (
          <ul className={s.list}>
            {reviews.map(({ id, author, content }) => (
              <li key={id} className={s.item}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <Title title="We don't have any revievs for this movie" />
        )} */}
      </div>
    </>
  );
};

export default Reviews;

