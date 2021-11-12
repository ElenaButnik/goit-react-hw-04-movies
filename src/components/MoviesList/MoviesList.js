import { Link, useRouteMatch } from "react-router-dom";
import s from "./MoviesList.module.css";

export default function MoviesList({ movies }) {
  const { url } = useRouteMatch();

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li className={s.listName} key={movie.id}>
          <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
