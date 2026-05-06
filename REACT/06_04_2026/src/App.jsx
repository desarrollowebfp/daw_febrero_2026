import "./App.css";
import { useState } from "react";

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    //Comprobamos que la nueva tarea que vamos a añadir no está vacía
    if (nuevaTarea.trim() === "") {
      return;
    }
    //Seteamos nuestro array de tareas con todas las anteriores más la nueva en la última posición
    setTareas([...tareas, nuevaTarea]);
    //Reiniciamos el valor de la nueva tarea para que se vea así en el input
    setNuevaTarea("");
  };

  const eliminarTarea = (indice) => {
    setTareas(tareas.filter((_, i) => i !== indice));
  };

  return (
    <>
      <h1>Mi lista de tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(ev) => setNuevaTarea(ev.target.value)}
      />
      <button onClick={agregarTarea}>Añadir</button>
      <ul>
        {tareas.length ? (
          tareas.map((tarea, indice) => (
            <li key={indice}>
              <p>{tarea}</p>
              <button onClick={() => eliminarTarea(indice)}>X</button>
            </li>
          ))
        ) : (
          <p>No hay tareas pendientes</p>
        )}
      </ul>
    </>
  );
};

export default App;
