const Lista = ({ listado }) => {
  return (
    <ul>
      {listado.map((personaje) => (
        <li key={personaje.id}>
          <h2>{personaje.nombre}</h2>
          <img src={personaje.imagen} alt={personaje.nombre} />
          {personaje.especie === "Alien" && <p>Marciano</p> }
        </li>
      ))}
    </ul>
  );
};

export default Lista;
