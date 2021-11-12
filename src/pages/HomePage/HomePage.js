import s from "./HomePage.module.css";
import FetchTrendMovies from "../../components/services/themoviedb";
import { useState, useEffect } from "react";
import MoviesList from "../../components/MoviesList/MoviesList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    FetchTrendMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);


  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
