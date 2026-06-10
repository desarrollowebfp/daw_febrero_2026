import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

const Buscador = () => {
	const [texto, setTexto] = useState("");
	const textoRetrasado = useDebounce(texto, 700);

	useEffect(() => {
		console.log("Buscando...", textoRetrasado);
	}, [textoRetrasado]);

	return (
		<>
			<input
				type="text"
				value={texto}
				onChange={(ev) => setTexto(ev.target.value)}
				placeholder="Buscar..."
			/>
            <p>{textoRetrasado}</p>
		</>
	);
};

export default Buscador;
