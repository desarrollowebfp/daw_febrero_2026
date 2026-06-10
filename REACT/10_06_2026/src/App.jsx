import "./App.css";
import Buscador from "./components/Buscador";
import Modal from "./components/Modal";
import Personajes from "./components/Personajes";
import Saludo from "./components/Saludo";

const App = () => {
	return (
		<>
			<Buscador />
			<Modal />
			<Personajes />
			<Saludo />
		</>
	);
};

export default App;
