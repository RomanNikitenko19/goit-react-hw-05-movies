import { useState, useEffect, Suspense, lazy } from "react";
import { useParams, NavLink, Route, Switch, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import * as api from "../../services/api";
import LoaderSpinner from "../../components/LoaderSpinner";
import Button from "../../components/Button";
import Title from "../../components/Title";
import InfoMovie from "../../components/InfoMovie";
import notImg from "../../images/not_img.jpg";
import s from "./MovieDetailsPage.module.css";

const Cast = lazy(() => import('../../components/Cast') /* webpackChunkName: "Cast" */);
const Reviews = lazy(() => import('../../components/Reviews')  /* webpackChunkName: "Revievs" */)

const BASE_URL_IMG = "https://image.tmdb.org/t/p/w500";

const MovieDetailsPage = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [infoMovie, setInfoMovie] = useState(null); //object

  const { movieId } = useParams();
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  // const handleReturn = () => {
  //   history.goBack();
  // }

  const handleReturn = () => {
    history.push(location?.state?.from ?? "/");
  };

  const gradeNormalize = (str) => {
    return `${(str * 10) / 100}%`;
  };

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await api.infoMovie(movieId);
        setInfoMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, [movieId, history]);

  return (
    <>
      <main>
        <section className={s.section}>
          <div className={s.container}>
            <Button handleReturn={handleReturn} text="Go back" />

            {loading && <LoaderSpinner />}
            {error && <Title title={error} />}
            {infoMovie && (
              <InfoMovie
                poster={infoMovie?.poster_path ? BASE_URL_IMG + infoMovie.poster_path : notImg}
                movieTitle={infoMovie?.original_title}
                userScore={gradeNormalize(infoMovie?.vote_average)}
                overliew={infoMovie?.overview}
                genres={infoMovie?.genres.map(({ name }) => name).join(" ")}
              />
            )}
          </div>
        </section>

        <section className={s.section}>
          <div className={s.container}>
            <Title title="additional information" />
            <ul className={s.list}>
              <li className={s.item}>
                {/* <NavLink to={`${match.url}/cast/`}> */}
                <NavLink
                  to={{
                    pathname: `${match.url}/cast`,
                    state: { from: location?.state?.from ?? "./" },
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li className={s.item}>
                {/* <NavLink to={`${match.url}/reviews/`}> */}
                <NavLink
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: { from: location?.state?.from ?? "./" },
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <Route path={`${match.path}/cast`}>
            {/* <Route exact path={`/movies/:movieId/cast`}> */}
            <Cast />
          </Route>
          <Route path={`${match.path}/reviews`}>
            {/* <Route exact path={`/movies/:movieId/reviews`}> */}
            <Reviews />
          </Route>

          {/* <Route render={() => <Redirect to={match.url} />} /> */}
          </Switch>
        </Suspense>
    </>
  );
};

export default MovieDetailsPage;
