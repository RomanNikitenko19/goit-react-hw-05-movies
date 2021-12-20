import Cast from "../Cast";
import Reviews from "../Reviews";
import Button from "../Button";
import Title from "../Title";
import InfoMovies from "../InfoMovies";

const MovieDetailsPage = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <a href="http://">Home</a>
              </li>
              <li>
                <a href="http://">Movies</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div>
          <Button />
          <InfoMovies />
          <Title />
          <ul>
            <Cast />
            <Reviews />
          </ul>

        </div>
      </main>
    </>
  );
}
export default MovieDetailsPage;