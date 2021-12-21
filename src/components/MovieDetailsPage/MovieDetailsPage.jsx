import { useState, useEffect } from "react";
import * as api from "../../services/api/api";
import LoaderSpinner from "../LoaderSpinner";
import Cast from "../Cast";
import Reviews from "../Reviews";
import Button from "../Button";
import Title from "../Title";
import InfoMovie from "../InfoMovie";

const MovieDetailsPage = ({id}) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [idMovie, setIdMovie] = useState(null);
  const [poster, setPoster] = useState(null);
  const [movieTitle, setMovieTitle] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [overliew, setOverliew] = useState(null);
  const [genres, setGenres] = useState(null);

  // setIdMovie(id);

  useEffect(() => {
    if (!id) return;

    const dataFetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await api.infoMovie(id).then(res=> console.log(res));
        const { poster_path, original_title, vote_average, overview, genres } = data;
        setPoster(poster_path);
        setMovieTitle(original_title);
        setUserScore(vote_average);
        setOverliew(overview);
        setGenres(genres.name);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, []);

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
        <section>
          <div>
            <Button text="Go back" />
            {loading && <LoaderSpinner />}
            {error && <Title title={error} />}
            <InfoMovie
              poster={poster}
              movieTitle={movieTitle}
              userScore={userScore}
              overliew={overliew}
              genres={genres}
            />
          </div>
        </section>

        <section>
          <div>
            <Title title="additional information" />
            <ul>
              <Cast />
              <Reviews />
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default MovieDetailsPage;
