import { useRef } from "react";

const EditorNotas = () => {
  const inputRef = useRef(null);
  const valorAnteriorRef = useRef("");

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleResetAndFocus = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const handleSave = () => {
    const valorActual = inputRef.current.value;
    alert(`Antes -> "${valorAnteriorRef.current}" - Ahora -> "${valorActual}"`);
    valorAnteriorRef.current = valorActual;
  };

  return (
    <div>
      <h2>Editor de Notas</h2>
      <input ref={inputRef} type="text" placeholder="Escribe una nota..." />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleResetAndFocus}>Limpiar y Focus</button>
      <button onClick={handleSave}>Guardar</button>
    </div>
  );
};

export default EditorNotas;

