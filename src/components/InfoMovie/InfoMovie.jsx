import PropTypes from "prop-types";
import Title from "../Title";
import s from './InfoMovie.module.css';

const InfoMovie = (props) => {
  const { poster, movieTitle, userScore, overliew, genres } = props;
  return (
    <>
      <div className={s.container}>
        <div className={s.wrapperImg}>
          <img src={poster} alt={movieTitle} />
        </div>
        <div className={s.wrapperText}>
          <Title title={movieTitle} />
          <ul className={s.list}>
            <li className={s.item}>{userScore}</li>
            <li className={s.item}>Overliew</li>
            <li className={s.item}>{overliew}</li>
            <li className={s.item}>Genres</li>
            <li className={s.item}>{genres}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

InfoMovie.propTypes = {
  poster: PropTypes.string,
  movieTitle: PropTypes.string,
  userScore: PropTypes.string,
  overliew: PropTypes.string,
  genres: PropTypes.string,
};

export default InfoMovie;