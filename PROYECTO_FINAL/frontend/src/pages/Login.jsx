import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { useAuth } from "../context/AuthContext";

const Login = () => {
	const navigate = useNavigate();
	const { login } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();

	const onSubmit = async (data) => {
		const res = await loginUser(data);
		if (res.error) {
			setError("root", { message: res.error });
			return;
		}
		login(res.token, res.user);
		navigate("/dashboard");
	};

	return (
		<section>
			<h1>Login</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="email"
					placeholder="email@email.com"
					{...register("email", {
						required: "El email es obligatorio",
					})}
				/>
				{errors.email && <p>{errors.email.message}</p>}
				<input
					type="password"
					placeholder="Password"
					{...register("password", {
						required: "La contraseña es obligatoria",
					})}
				/>
				{errors.password && <p>{errors.password.message}</p>}
				<button type="submit">Login</button>
				{errors.root && <p>{errors.root.message}</p>}
			</form>
		</section>
	);
};

export default Login;
