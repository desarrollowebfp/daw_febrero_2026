import "./App.css";
import { useState, useCallback } from "react";
import Saludo from "./components/Saludo";

const App = () => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");

  // Memoizamos una función mediante useCallback para que React interprete que siempre es la misma al mandarla por prop
  const saludar = useCallback(() => alert("Hola " + nombre), [nombre]);

  return (
    <>
      <p>Contador: {contador}</p>
      <input
        type="text"
        value={nombre}
        onChange={(ev) => setNombre(ev.target.value)}
      />
      <button onClick={() => setContador(contador + 1)}>+1</button>
      <Saludo onSaludar={saludar} />
    </>
  );
};

export default App;

// Cuando NO usar useCallback

// - Cuando NO pasamos una función por prop a un componente hijo
// - Cuando el componente hijo, por mucho que la prop provoque re-renders, no renderiza nada complicado -> NO MERECE LA PENA

// QUE NO SE OS OLVIDE ENVOLVER EL COMPONENTE HIJO CON MEMO
// Si quereis volver a crear la función que no se os olvide el array de dependencias