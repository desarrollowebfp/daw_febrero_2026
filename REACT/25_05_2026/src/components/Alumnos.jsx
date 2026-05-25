import { useState, useMemo } from "react";

const alumnos = ["Juan", "Jorge", "Joa", "Agustín"];

const ListaAlumnos = () => {
  const [contador, setContador] = useState(0);
  const [keyword, setKeyword] = useState("");

  const filtrados = useMemo(() => {
    console.log("Filtrando...")
    return alumnos.filter((alumno) =>
      alumno.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [keyword]);

  return (
    <>
      <button onClick={() => setContador(contador + 1)}>
        Segundo contador: {contador}
      </button>
      <input
        type="text"
        placeholder="Nombre alumno"
        value={keyword}
        onChange={(ev) => setKeyword(ev.target.value)}
      />
      <ul>
        {filtrados.map((filtrado) => (
          <li key={filtrado}>
            <p>{filtrado}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListaAlumnos;
