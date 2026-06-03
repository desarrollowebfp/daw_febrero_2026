import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

const carritoReducer = (state, action) => {
  switch (action.type) {
    case "agregar":
      return [...state, { id: uuidv4(), nombre: "Manzana", cantidad: 1 }];
    case "eliminar":
      return state.filter((articulo) => articulo.id !== action.id);
    case "cambiarCantidad":
      return state.map((articulo) =>
        articulo.id === action.id
          ? { ...articulo, cantidad: action.cantidad }
          : articulo,
      );
    default:
      return state;
  }
};

const Carrito = () => {
  const [articulos, dispatch] = useReducer(carritoReducer, []);
  console.log(articulos);
  return (
    <>
      <h2>Articulos en el carrito: {articulos.length}</h2>
      <button onClick={() => dispatch({ type: "agregar" })}>
        Agregar manzana
      </button>
      <ul>
        {articulos.map((articulo) => (
          <li key={articulo.id}>
            {articulo.nombre} x {articulo.cantidad} - {articulo.id}
            <button
              onClick={() => dispatch({ type: "eliminar", id: articulo.id })}
            >
              Eliminar
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "cambiarCantidad",
                  id: articulo.id,
                  cantidad: articulo.cantidad + 1,
                })
              }
            >
              +1
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "cambiarCantidad",
                  id: articulo.id,
                  cantidad: articulo.cantidad - 1,
                })
              }
            >
              -1
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Carrito;
