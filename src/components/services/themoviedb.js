const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '2b5d178c741f6b8e682bbf189cae36ed';

async function FetchWithErrorMovies(url = '', config ={}){
    const response = await fetch(url, config);
    return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

export default function FetchTrendMovies(){
    return FetchWithErrorMovies(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
}

export function FetchMoviesById(movieId){
    return FetchWithErrorMovies(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

// export function fetchMovies(media_type, time_window) {
//   return fetch(
//     `https://api.themoviedb.org/trending/${media_type}/${time_window}?api_key=2b5d178c741f6b8e682bbf189cae36ed/trending/`
//   ).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(
//       new Error(`There are no movies ${media_type} in ${time_window}`)
//     );
//   });
// }

// const api = { fetchMovies };
// export default api;
