const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "2b5d178c741f6b8e682bbf189cae36ed";

async function FetchWithErrorMovies(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function FetchTrendMovies() {
  return FetchWithErrorMovies(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
}

export function fetchGetMovieDetails(movieId) {
  return FetchWithErrorMovies(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
}

export function FetchActors(movieId) {
  return FetchWithErrorMovies(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
}

export function FetchFilms(searchValue) {
  return FetchWithErrorMovies(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`
  );
}

export function FetchReviews(movieId) {
  return FetchWithErrorMovies(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
}
