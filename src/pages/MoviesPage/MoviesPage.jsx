import { useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import * as api from "../../services/api";
import * as localStorage from "../../services/localStorage";
import LoaderSpinner from "../../components/LoaderSpinner";
import Title from "../../components/Title";
import s from './MoviesPage.module.css';

const MoviesPage = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const match = useRouteMatch();
  const location = useLocation();
  // const history = useHistory();useHistory
  const LOCALSTORAGE_KEY = "search";

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;
    // history.push({ ...location, search: `search=${input}` }); useHistory
    setSearch(input);
  };

  useEffect(() => {
    if (!search) return;

    const dataFetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await api.searchMovie(search);
        // setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setMovies([...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, [search]);

  useEffect(() => {
    const query = localStorage.get(LOCALSTORAGE_KEY);
    if (query) {
      // setInput(query);
      setSearch(query);
    }
  }, [])

  useEffect(() => {
    if (search) localStorage.save(LOCALSTORAGE_KEY, search);
  }, [search]);

  return (
    <>
      <main>
        <section className={s.section}>
          <div className={s.container}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={handleChange}
                value={input}
                autoComplete="off"
                autoFocus
                placeholder="Search"
              />

              <button type="sybmit">
                <span>search</span>
              </button>
            </form>
            {error && <Title title={error} />}
            {loading && <LoaderSpinner />}

            {movies && (
              <ul className={s.list}>
                {movies.map(({ original_title, id }) => (
                  <li key={id} className={s.item}>
                    <Link
                      to={{
                        // pathname: `/movies/${id}`,
                        pathname: `${match.url}/${id}`,
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

export default MoviesPage;
