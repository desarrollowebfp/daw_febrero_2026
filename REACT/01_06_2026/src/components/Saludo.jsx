import { memo } from "react";

// Con React memo podemos memoizar la prop onSaludar que viene creada con useCallback, de esta manera en conjunto no nos re-renderiza el componente
const Saludo = memo(({ onSaludar }) => {
  console.log("Se renderiza Saludo");
  return <button onClick={onSaludar}>Saludar</button>;
});

export default Saludo;
