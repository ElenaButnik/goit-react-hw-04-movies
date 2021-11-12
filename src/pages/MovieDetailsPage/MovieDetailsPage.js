import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FetchMoviesById } from "../../components/services/themoviedb";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    FetchMoviesById(movieId).then((movie) => {
        setMovie(movie);
  });
 }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <h1>{movie.title}</h1>
          <img src={movie.poster_path} alt={movie.title} />
          <p>{movie.genre_ids}</p>
          <p>{movie.overview}</p>
          <p>Additional information</p>
        </>
      )}
    </>
  );
}
