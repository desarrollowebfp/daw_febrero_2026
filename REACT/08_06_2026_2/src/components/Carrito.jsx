import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Carrito = () => {
	const { carrito } = useContext(CarritoContext);

	return (
		<section>
			<h2>Carrito</h2>
			{carrito.length ? (
				carrito.map((articulo) => (
					<article key={articulo.id}>
						<p>{articulo.name}</p>
						<p>{articulo.location}</p>
					</article>
				))
			) : (
				<p>No hay articulos en el carrito</p>
			)}
		</section>
	);
};

export default Carrito;
