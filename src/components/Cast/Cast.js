import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { FetchActors } from "../services/themoviedb";
import s from "./Cast.module.css";
import imgForDefault from "../../images/default-image-620x600.jpg";
import PropTypes from "prop-types";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    FetchActors(movieId).then((data) => {
      setCast(data.cast);
      pageScroll();
    });
  }, [movieId]);

  const pageScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? "/");
  };

  return (
    cast && (
      <div className={s.container}>
        <ul className={s.list}>
          {cast.map((actor) => (
            <li key={actor.id} className={s.item}>
              <img
                className={s.img}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : imgForDefault
                }
                alt={actor.original_name}
                width="150"
              />
              <div className={s.aboutAll}>
                <p className={s.about}>{actor.original_name}</p>
                <p className={s.about}>Character: {actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className={s.btnCont}>
          <button type="button" onClick={onGoBack} className={s.btn}>
            back to finding movie 
          </button>
        </div>
      </div>
    )
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};
