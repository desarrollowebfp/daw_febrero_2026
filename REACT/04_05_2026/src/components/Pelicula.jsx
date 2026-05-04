const Pelicula = ({ title, year, director }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>Año: {year}</p>
      <p>Director: {director}</p>
    </article>
  );
};

export default Pelicula;
