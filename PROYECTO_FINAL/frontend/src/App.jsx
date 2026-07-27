import Layout from "./components/Layout";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";

const App = () => {
	const { token, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	return (
		<Layout>
			<Navbar token={token} onLogout={handleLogout} />
			<main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10">
				<Outlet />
			</main>
			<footer className="border-t border-secondary/10 px-6 py-6 text-center text-secondary/50">
				<p>DoIt App &copy; {new Date().getFullYear()}</p>
			</footer>
		</Layout>
	);
};

export default App;
