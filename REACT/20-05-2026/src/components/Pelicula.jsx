import { memo } from "react";
import Tarjeta from "./Tarjeta";

const Pelicula = memo(({ titulo, anio, director, destacada}) => {
  console.log(`Renderizado ${titulo}`);
  return (
    <Tarjeta>
      <h2>
        {titulo} {destacada && "⭐️"}
      </h2>
      <p>{anio}</p>
      <p>{director}</p>
      {/* <p>{etiquetas.join(", ")}</p> */}
    </Tarjeta>
  );
});

export default Pelicula;
