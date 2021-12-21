// import PropTypes from "prop-types";
import Title from "../Title";

const InfoMovie = (props) => {
  const { poster, movieTitle, userScore, overliew, genres } = props;
  return (
    <>
      <div>
        <div>
          <img src={poster} alt={movieTitle} />
        </div>
        <div>
          <Title title={movieTitle} />
          <ul>
            <li>{userScore}</li>
            <li>Overliew</li>
            <li>{overliew}</li>
            <li>Genres</li>
            <li>{genres}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

// InfoMovie.propTypes = {

// };

export default InfoMovie;