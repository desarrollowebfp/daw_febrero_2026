import "./App.css";
import Pagina from "./components/Pagina";
import { useContext } from "react";
import { TemaContext } from "./context/TemaContext";

const App = () => {
	const { temaDark } = useContext(TemaContext);
	return (
		<>
			<Pagina />
			<h2>El tema que me está llegando es: {temaDark ? "Tema oscuro" : "Tema claro"}</h2>
		</>
	);
};

export default App;
