import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=2c87872a&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h2>MovieDetail</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Link to="/">Volver a la galeria</Link>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} />
          <h4>{movie.Year}</h4>
          <p>{movie.Director}</p>
          <p>{movie.Awards}</p>
          <p>{movie.Plot}</p>
        </div>
      )}
    </main>
  );
};

export default MovieDetail;
