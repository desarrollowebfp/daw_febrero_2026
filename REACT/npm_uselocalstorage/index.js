import { useState, useEffect } from "react";

const useLocalStorage = (clave, valorInicial) => {
	const [valor, setValor] = useState(() => {
		const guardado = localStorage.getItem(clave);
		return guardado !== null ? JSON.parse(guardado) : valorInicial;
	});

	useEffect(() => {
		localStorage.setItem(clave, JSON.stringify(valor));
	}, [clave, valor]);

	return [valor, setValor];
};

export default useLocalStorage;
