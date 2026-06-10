import { useState, useEffect } from "react";

const useDebounce = (valor, retraso) => {
	const [valorRetrasado, setValorRetrasado] = useState(valor);

	useEffect(() => {
		const temporizador = setTimeout(() => {
			setValorRetrasado(valor);
		}, retraso);

		return () => clearTimeout(temporizador);
        
	}, [valor, retraso]);

	return valorRetrasado;
};

export default useDebounce;
