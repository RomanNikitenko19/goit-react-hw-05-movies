import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderSpinner = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={300}
      width={300}
      timeout={3000} //3 secs
    />
  );
};

export default LoaderSpinner;
