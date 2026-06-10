import useLocalStorage from "use-local-storage-prometeo";

const Saludo = () => {
	const [nombre, setNombre] = useLocalStorage("nombre", "");

	return (
		<>
			<input
				type="text"
				value={nombre}
				onChange={(ev) => setNombre(ev.target.value)}
			/>
			<p>Hola {nombre}</p>
		</>
	);
};

export default Saludo;