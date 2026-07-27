import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
	const navigate = useNavigate();
	const { login, logout } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();

	const onSubmit = async (data) => {
		const res = await loginUser(data);
		if (res.message) {
			setError("root", { message: res.message });
			logout();
			return;
		}
		login(res.token, res.user);
		navigate("/dashboard");
	};

	return (
		<section className="max-w-md mx-auto py-10">
			<h1 className="text-md font-serif font-bold mb-6">Login</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-4 p-6 rounded-xl border border-secondary/10 bg-secondary/5"
			>
				<div className="flex flex-col gap-1">
					<input
						type="email"
						placeholder="email@email.com"
						className="w-full px-4 py-3 rounded-lg bg-primary border border-secondary/20 outline-none focus:border-highlight transition-colors"
						{...register("email", {
							required: "El email es obligatorio",
						})}
					/>
					{errors.email && (
						<p className="text-highlight">{errors.email.message}</p>
					)}
				</div>
				<div className="flex flex-col gap-1">
					<input
						type="password"
						placeholder="Password"
						className="w-full px-4 py-3 rounded-lg bg-primary border border-secondary/20 outline-none focus:border-highlight transition-colors"
						{...register("password", {
							required: "La contraseña es obligatoria",
						})}
					/>
					{errors.password && (
						<p className="text-highlight">{errors.password.message}</p>
					)}
				</div>
				<button
					type="submit"
					className="w-full px-6 py-3 rounded-lg bg-highlight text-secondary font-semibold hover:opacity-90 transition-opacity cursor-pointer"
				>
					Login
				</button>
				{errors.root && (
					<p className="text-highlight text-center">{errors.root.message}</p>
				)}
			</form>
		</section>
	);
};

export default Login;
