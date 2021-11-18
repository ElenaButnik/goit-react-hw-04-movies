import s from "./MoviesPage.module.css";
import { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import { FetchFilms } from "../../components/services/themoviedb";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function MoviesPage() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();

  const searchURL = new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    if (!searchValue) {
      return;
    }

    FetchFilms(searchValue)
      .then((data) => {
        if (data.results.length === 0) {
          alert("Please try again");
          return;
        }
        setMovies(data.results);
      })
      .catch((error) => alert("Please try one more time"));
  }, [searchValue]);

  useEffect(() => {
    if (searchURL === "") {
      return;
    }
    setSearchValue(searchURL);
  }, [searchURL]);

  const setHistory = (searchValue) => {
    history.push({
      ...location,
      search: `query=${searchValue}`,
    });
  };

  const onSubmit = (searchValue) => {
    setSearchValue(searchValue);
    setHistory(searchValue);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
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
