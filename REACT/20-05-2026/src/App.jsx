import { useState } from "react";
import "./App.css";
import Pelicula from "./components/Pelicula";

const peliculas = [
  { id: 1, titulo: "Origen", anio: 2010, director: "Nolan" },
  { id: 2, titulo: "Pulp Fiction", anio: 1987, director: "Tarantino" },
  { id: 3, titulo: "El Padrino", anio: 1978, director: "Coppola" },
];

const App = () => {
  const [contador, setContador] = useState(0);
  const [idDestacada, setIdDestacada] = useState(null);
  return (
    <>
      <h1>Catálogo de películas</h1>
      <button onClick={() => setContador(contador + 1)}>
        Has pulsado {contador} veces
      </button>
      <button onClick={() => setIdDestacada(1)}>Destacar Origen</button>
      <button onClick={() => setIdDestacada(2)}>Destacar Tarantino</button>
      <button onClick={() => setIdDestacada(3)}>Destacar Coppola</button>
      {peliculas.map((pelicula) => (
        <Pelicula
          key={pelicula.id}
          titulo={pelicula.titulo}
          anio={pelicula.anio}
          director={pelicula.director}
          destacada={pelicula.id === idDestacada}
          //etiquetas={["acción", "clásicas", "cine"]}
        />
      ))}
    </>
  );
};

export default App;
