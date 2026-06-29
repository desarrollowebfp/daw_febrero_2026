import { useState } from "react";

const Contador = ({ etiqueta, inicial = 0 }) => {
	const [valor, setValor] = useState(inicial);
	return (
		<section>
			<h2>{etiqueta}</h2>
			<p data-testid="valor">Valor: {valor}</p>
			<button onClick={() => setValor(valor + 1)}>Incrementar</button>
		</section>
	);
};

export default Contador;
