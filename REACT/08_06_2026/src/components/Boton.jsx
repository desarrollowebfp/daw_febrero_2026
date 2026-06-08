import { useContext } from "React";
import { TemaContext } from "../context/TemaContext";

const Boton = () => {
	//Le indico que contexto va a utilizar y qué voy a sacar del mismo
	const { temaDark } = useContext(TemaContext);
	return (
		<button className={temaDark ? "dark" : "light"}>
			Tema: {temaDark ? "Tema oscuro" : "Tema claro"}
		</button>
	);
};

export default Boton;
