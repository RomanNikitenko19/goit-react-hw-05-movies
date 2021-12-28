import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from '../../services/api';
import LoaderSpinner from "../LoaderSpinner";
import Title from '../Title';
import notImg from '../../images/not_img.jpg'
import s from './Cast.module.css';

const BASE_URL_IMG = "https://image.tmdb.org/t/p/w500";

const Cast = () => {
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!movieId) return;

        const data = await api.infoAboutActors(movieId);
        setActors(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(null);
      }
    };
    dataFetch();
  }, [movieId]);

  return (
    <>
      <div className={s.container}>
        {loading && <LoaderSpinner />}
        {error && <Title title={error} />}
        {actors && (
          <ul className={s.list}>
            {actors.map(({ id, profile_path, original_name }) => (
                <li key={id} className={s.item}>
                  <div className={s.wrapperImg}>
                    <img src={profile_path ? BASE_URL_IMG + profile_path : notImg} alt={original_name} />
                  </div>
                  <div className={s.wrapperText}>
                    <h3 className={s.title}>{original_name}</h3>
                  </div>
                </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Cast;
