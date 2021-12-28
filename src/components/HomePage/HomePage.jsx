import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as api from "../../services/api";
import LoaderSpinner from "../LoaderSpinner";
import Title from "../Title";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [trendingMovies, setTretdingMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

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

  return (
    <>
      <main>
        <section className={s.section}>
          <div className={s.container}>
          <Title title="Trending todey" />
          {error && <Title title={error} />}
          {loading && <LoaderSpinner />}
          {trendingMovies.length > 0 && (
            <ul className={s.list}>
              {trendingMovies.map(({ original_title, id }) => (
                <li key={id} className={s.item}>
                  {/* <Link to={`${url}/${id}`}>{original_title}</Link> */}
                  <Link
                    to={{
                      pathname: `/movies/${id}`,
                      state: { from: location },
                    }}
                  >
                    {original_title}
                  </Link>
                </li>
              ))}
            </ul>
            )}
            </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
