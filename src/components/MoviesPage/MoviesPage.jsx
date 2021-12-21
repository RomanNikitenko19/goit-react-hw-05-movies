import { useState, useEffect } from "react";
import * as api from '../../services/api/api';
import LoaderSpinner from "../LoaderSpinner";
import Title from "../Title";
// import PropTypes from "prop-types";

const MoviesPage = ({getId}) => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (!input) return;

    setSearch(input);
    setInput('');
  }

  useEffect(() => {
    if (!search) return;

    const dataFetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await api.searchMovie(search);
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, [search]);

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

            {movies.length > 0 && (
              <ul>
                {movies.map(({ original_title, id }) => (
                  <li key={id} onClick={() => getId(id)}>
                    <a href="./">{original_title}</a>
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

// MoviesPage.propTypes = {
//   search: PropTypes.string.isRequired,
// };

export default MoviesPage;
