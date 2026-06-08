import "./App.css";
import Navbar from "./components/Navbar";
import Perfil from "./components/Perfil";
import Carrito from "./components/Carrito";
import CarritoForm from "./components/CarritoForm";

const App = () => {
	return (
		<>
			<Navbar />
			<Perfil />
			<Carrito />
			<CarritoForm />
		</>
	);
};

export default App;
