import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [keyword, setKeyword] = useState("Alien");

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=2c87872a&s=${keyword}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=2c87872a&s=${keyword}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      });
  };

  return (
    <main>
      <h2>Movies</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input
            type="text"
            value={keyword}
            onChange={(ev) => setKeyword(ev.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
          <ul>
            {movies.map((movie) => (
              <li key={movie.imdbID}>
                <Link to={`/movies/${movie.imdbID}`}>
                  <img src={movie.Poster} alt={movie.Title} />
                  <h3>{movie.Title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default Movies;
