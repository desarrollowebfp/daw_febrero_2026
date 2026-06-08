import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";

const CarritoForm = () => {
	const { anadirArticulo, limpiarCarrito } = useContext(CarritoContext);

	return (
		<>
			<h2>Modificar Carrito</h2>
			<button onClick={anadirArticulo}>Añadir articulo</button>
			<button onClick={limpiarCarrito}>Limpiar carrito</button>
		</>
	);
};

export default CarritoForm;
