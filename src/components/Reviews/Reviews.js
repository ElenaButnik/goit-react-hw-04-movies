import { FetchReviews } from "../services/themoviedb";
import { useEffect, useState } from "react";
import s from "./Reviews.module.css";
import PropTypes from "prop-types";

export default function Reviews({ movieId }) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    FetchReviews(movieId).then((data) => {
      setInfo(data.results);
    });
  }, [movieId]);

  return (
    <>
      {info.length > 0 ? (
        <ul className={s.list}>
          {info.map((result) => (
            <li key={result.id} className={s.item}>
              <p className={s.about}>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.item}>No review results</p>
      )}
    </>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};
