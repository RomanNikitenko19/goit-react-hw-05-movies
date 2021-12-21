import { useState } from "react";
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
function App() {
  const [id, setId] = useState(null);

  const getId = id =>setId(id)

  return (
    <>
      <h1>hello</h1>
      <HomePage getId={getId}/>
      <MoviesPage getId={getId}/>
      <MovieDetailsPage id={id} />
    </>
  );
}

export default App;
