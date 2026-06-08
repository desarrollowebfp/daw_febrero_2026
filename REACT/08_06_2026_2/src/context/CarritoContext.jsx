import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);

	const anadirArticulo = () => {
		setCarrito([
			...carrito,
			{
				id: uuidv4(),
				name: faker.animal.dog(),
				location: faker.location.country(),
			},
		]);
	};

	const limpiarCarrito = () => {
		setCarrito([]);
	};

	return (
		<CarritoContext.Provider
			value={{ carrito, anadirArticulo, limpiarCarrito }}
		>
			{children}
		</CarritoContext.Provider>
	);
};
