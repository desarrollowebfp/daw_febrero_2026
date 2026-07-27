import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<section className="flex flex-col gap-4 justify-center items-center text-center py-20">
			<h1 className="text-lg font-serif font-bold text-highlight">404</h1>
			<p className="text-md text-secondary/70">Página no encontrada</p>
			<Link
				to="/"
				className="mt-4 px-6 py-3 rounded-xl border border-secondary/20 hover:border-highlight hover:text-highlight transition-colors"
			>
				Volver a la página principal
			</Link>
		</section>
	);
};

export default NotFound;
