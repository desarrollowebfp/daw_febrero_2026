import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { CarritoContext } from "../context/CarritoContext";
import Login from "../components/Login";

const Navbar = () => {
	const { user, logout } = useContext(UserContext);
	const { carrito } = useContext(CarritoContext);

	return (
		<nav>
			<h1>Navbar</h1>
			<p>Nº elemento en el carrito: {carrito.length}</p>
			{user ? <p>Welcome {user.name}</p> : <p>Please, log in</p>}
			{user && <button onClick={logout}>Logout</button>}
			{!user && <Login />}
		</nav>
	);
};

export default Navbar;
