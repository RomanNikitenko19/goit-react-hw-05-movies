import PropTypes from "prop-types";

const MoviesPage = ({ search }) => {
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
          <form>
            <input type="text" autoComplete="off" autoFocus placeholder="Search" />

            <button type="sybmit">
              <spam>{search}</spam>
            </button>
          </form>
        </div>
      </section>
      </main>
    </>
  );
};

MoviesPage.propTypes = {
  search: PropTypes.string.isRequired,
};

export default MoviesPage;
