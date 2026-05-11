import { useEffect, useState } from "react";

const Component = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((res) => setCharacters(res.results));
  }, [page]);

  return (
    <>
      <h2>Characters - Page: {page}</h2>
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <p>{character.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Component;
