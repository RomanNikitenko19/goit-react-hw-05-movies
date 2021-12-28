import { Suspense, lazy } from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import Navigation from './components/Navigation';
import LoaderSpinner from "./components/LoaderSpinner";

const HomePage = lazy(() => import("./pages/HomePage/HomePage") /* webpackChunkName: "Home___Page" */);
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage") /* webpackChunkName: "Movies___Page" */);
const MovieDetailsPage = lazy(
  () => import("./pages/MovieDetailsPage/MovieDetailsPage") /* webpackChunkName: "Movie___Details___Page" */
);


function App() {

  return (
    <>
      <header>
        <Navigation />
      </header>

      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
