import PropTypes from "prop-types";
import Title from "../Title";
const InfoMovies = ({title}) => {
  return (
    <>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <Title>{title}</Title>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

InfoMovies.propTypes = {
  title: PropTypes.string.isRequired,
}

export default InfoMovies;