import { useState, useEffect } from "react";
import * as api from "../../services/api/api";
import LoaderSpinner from '../LoaderSpinner';
import Title from "../Title";

const HomePage = ({getId}) => {
  const [trendingMovies, setTretdingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
      const dataFetch = async () => {
        setLoading(true);
        setError(null);
        try {
          const data = await api.trendingMovies();
          setTretdingMovies((prevTrendingMovies) => [...prevTrendingMovies, ...data.results]);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      dataFetch();
    }, [setTretdingMovies]);

  // console.log(trendingMovies);

  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <a href="./">Home</a>
              </li>
              <li>
                <a href="./">Movies</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section>
          <Title title="Trending todey" />
          {error && <Title title={error} />}
          {loading && <LoaderSpinner />}
          {trendingMovies.length > 0 && (
            <ul>
              {trendingMovies.map(({ original_title, id }) => (
                <li key={id} onClick={() => getId(id)}>
                  <a href="./">{original_title}</a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
};

export default HomePage;
