import { memo } from "react";
import { NavLink } from "react-router-dom";

const linkClasses = ({ isActive }) =>
	`px-3 py-2 rounded-lg transition-colors hover:text-highlight ${
		isActive ? "text-highlight font-semibold" : "text-secondary/80"
	}`;

const Navbar = memo(({ token, onLogout }) => {
	return (
		<header className="border-b border-secondary/10 sticky top-0 bg-primary/95 backdrop-blur z-10">
			<nav className="w-full max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
				<NavLink to="/" className="text-md font-serif font-bold">
					Do<span className="text-highlight">It</span>
				</NavLink>
				<ul className="flex items-center gap-2 sm:gap-4">
					<li>
						<NavLink to="/" className={linkClasses}>
							Inicio
						</NavLink>
					</li>
					{token ? (
						<>
							<li>
								<NavLink to="/dashboard" className={linkClasses}>
									Dashboard
								</NavLink>
							</li>
							<li>
								<NavLink to="/profile" className={linkClasses}>
									Perfil
								</NavLink>
							</li>
							<li>
								<button
									onClick={onLogout}
									className="px-4 py-2 rounded-lg border border-secondary/20 hover:border-highlight hover:text-highlight transition-colors cursor-pointer"
								>
									Cerrar sesión
								</button>
							</li>
						</>
					) : (
						<>
							<li>
								<NavLink to="/login" className={linkClasses}>
									Login
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/register"
									className="px-4 py-2 rounded-lg bg-highlight text-secondary font-semibold hover:opacity-90 transition-opacity"
								>
									Registro
								</NavLink>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
});

export default Navbar;
