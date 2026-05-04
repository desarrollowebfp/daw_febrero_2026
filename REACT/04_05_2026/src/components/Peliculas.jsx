import Pelicula from "./Pelicula";

const Peliculas = ({peliculas}) => {
  return (
    <section>
      {peliculas.map((pelicula) => (
        <Pelicula
          title={pelicula.title}
          year={pelicula.year}
          director={pelicula.director}
          key={pelicula.id}
        />
      ))}
    </section>
  );
};

export default Peliculas