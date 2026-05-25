import { memo } from "react";

const Saludo = memo(({ usuario }) => {
  console.log("Renderizando saludo");
  return <p>Hola {usuario.nombre}</p>;
});

export default Saludo;