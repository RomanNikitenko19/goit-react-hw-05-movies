import PropTypes from "prop-types";
const Title = ({ title }) => <h2>{title}</h2>

Title.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Title;