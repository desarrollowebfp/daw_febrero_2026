import Boton from "./Boton";
import { TemaContext } from "../context/TemaContext";
import { useContext } from "react";

const Barra = () => {
	const { setTemaDark, temaDark } = useContext(TemaContext);
	return (
		<>
			<Boton />
			<button onClick={() => setTemaDark(!temaDark)}>
				{temaDark ? "Setear a modo claro" : "Setear a modo oscuro"}
			</button>
		</>
	);
};

export default Barra;
