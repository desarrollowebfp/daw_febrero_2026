import { memo } from "react";
import { NavLink } from "react-router-dom";

const Navbar = memo((token, onLogout) => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Inicio</NavLink>
				</li>
				{token ? (
					<>
						<li>
							<NavLink to="/dashboard">Dashboard</NavLink>
						</li>
						<li>
							<NavLink to="/profile">Perfil</NavLink>
						</li>
						<button onClick={onLogout}>Cerrar sesión</button>
					</>
				) : (
					<>
						<li>
							<NavLink to="/login">Login</NavLink>
						</li>
						<li>
							<NavLink to="/register">Registro</NavLink>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
});

export default Navbar;
