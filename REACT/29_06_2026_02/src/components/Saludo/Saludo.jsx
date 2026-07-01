const { useState } = require("react");

const Saludo = () => {
	const [texto, setTexto] = useState("");
	const [nombre, setNombre] = useState("clase");

	const saludar = () => {
		if (texto.trim() === "") return;
		setNombre(texto);
		setTexto("");
	};

	return (
		<>
			<h1>Hola, {nombre}</h1>
			<input
				type="text"
				value={texto}
				placeholder="Escribe un nombre..."
				onChange={(ev) => setTexto(ev.target.value)}
				data-testid="input"
			/>
			<button onClick={saludar} disabled={texto.trim() === ""}>Saludar</button>
		</>
	);
};

export default Saludo;
