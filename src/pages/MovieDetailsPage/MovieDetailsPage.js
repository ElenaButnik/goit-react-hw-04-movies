import { useEffect, useState, lazy, Suspense } from "react";
import {
  Route,
  useParams,
  useRouteMatch,
  NavLink,
  useLocation,
  useHistory,
} from "react-router-dom";
import { fetchGetMovieDetails } from "../../components/services/themoviedb";
import s from "./MovieDetailsPage.module.css";

const Cast = lazy(() =>
  import("../../components/Cast/Cast" /*webpackChunkName: 'cast'*/)
);
const Reviews = lazy(() =>
  import("../../components/Reviews/Reviews" /*webpackChunkName: 'Reviews'*/)
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    fetchGetMovieDetails(movieId).then((movie) => {
      setMovie(movie);
    });
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from?.location ?? "/");
  };

  return (
    <>
      <button type="button" onClick={onGoBack} className={s.link}>
        go back
      </button>
      {movie && (
        <>
          <h2 className={s.title}>{movie.title}</h2>
          <div className={s.container}>
            <img
              className={s.img}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <p className={s.descr}>{movie.overview}</p>
              <p className={s.descrDate}>Release date ({movie.release_date})</p>
              <p className={s.descrDate}>
                Genres: {movie.genres.map((genre) => genre.name).join(" , ")}
              </p>
            </div>
          </div>
          <p className={s.descrAd}>Additional information</p>

          <NavLink
            className={s.navLink}
            to={{
              pathname: `${url}/cast`,
              state: { from: location?.state?.from ?? "/" },
            }}
          >
            Cast
          </NavLink>

          <NavLink
            className={s.navLink}
            to={{
              pathname: `${url}/reviews`,
              state: { from: location?.state?.from ?? "/" },
            }}
          >
            Reviews
          </NavLink>

          <Suspense fallback={<p>Waiting...</p>}>
            <Route path={`${path}/cast`}>
              <Cast movieId={movieId} />
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}
