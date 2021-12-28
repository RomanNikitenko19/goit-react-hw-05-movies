import { Suspense } from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import HomePage from "./components/HomePage";
import MoviesPage from "./components/MoviesPage";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
import Navigation from './components/Navigation';
import LoaderSpinner from "./components/LoaderSpinner";

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
