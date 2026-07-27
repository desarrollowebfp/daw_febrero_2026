import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
	const { token } = useAuth();
	return (
		<section className="flex flex-col gap-6 justify-center items-center text-center py-16">
			<h1 className="text-lg font-serif font-bold leading-tight">
				Do<span className="text-highlight">It</span> App
			</h1>
			<p className="text-md text-secondary/70 max-w-xl">
				Aplicación de gestión de tareas
			</p>
			{!token && (
				<div className="flex flex-wrap gap-4 justify-center mt-4">
					<Link
						to="/login"
						className="px-6 py-3 rounded-xl bg-highlight text-secondary font-semibold hover:opacity-90 transition-opacity"
					>
						Acceder
					</Link>
					<Link
						to="/register"
						className="px-6 py-3 rounded-xl border border-secondary/20 hover:border-highlight hover:text-highlight transition-colors"
					>
						Crear cuenta
					</Link>
				</div>
			)}
		</section>
	);
};

export default Home;
