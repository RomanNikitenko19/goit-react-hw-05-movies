//An example request looks like:

//список самых популярных фильмов на сегодня
//https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>

// поиск кинофильма по ключевому слову
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

// запрос полной информации о фильме
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// запрос информации о актёрском составе
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

//запрос обзоров
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '299cdced1173d29461838bac19c38b55';

const trendingMovies = async () => {
  const res = await fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
  return res.ok ? res.json() : Promise.reject(new Error("somewhere error"));
};

const searchMovie = async search => {
  const res = await fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${search}`);
  return res.ok ? res.json() : Promise.reject(new Error("somewhere error"));
};

const infoMovie = async id => {
  const res = fetch(`${BASE_URL}movie/${id}/?api_key=${API_KEY}`); //&append_to_response=videos !!!
  return res.ok ? res.json() : Promise.reject(new Error("somewhere error"));
}

const infoAboutActors = async id => {
  const res = await fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
  return res.ok ? res.json() : Promise.reject(new Error("somewhere error"));
}

const reviewsForAMovie = async id => {
  const res = await fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
  return res.ok ? res.json() : Promise.reject(new Error("somewhere error"));
}

export { trendingMovies, searchMovie, infoMovie, infoAboutActors, reviewsForAMovie };

