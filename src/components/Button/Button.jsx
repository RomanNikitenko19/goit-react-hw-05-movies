import PropTypes from "prop-types";

const Button = ({ text, handleReturn }) => (
  <button onClick={handleReturn} type="button">
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleReturn: PropTypes.func.isRequired,
};

export default Button;
