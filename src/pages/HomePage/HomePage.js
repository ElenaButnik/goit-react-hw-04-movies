import s from "./HomePage.module.css";
import { FetchTrendMovies } from "../../components/services/themoviedb";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  console.log("home", location);

  useEffect(() => {
    FetchTrendMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li className={s.listName} key={movie.id}>
            <Link
              className={s.link}
              to={{
                pathname: `movies/${movie.id}`,
                state: {
                  from: {
                    location,
                  },
                },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
