import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

const Register = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();

	const onSubmit = async (data) => {
		const formData = new FormData();
		formData.append("username", data.username);
		formData.append("email", data.email);
		formData.append("password", data.password);

		if (data.avatar?.[0]) {
			formData.append("avatar", data.avatar[0]);
		}

		const res = await registerUser(formData);

		if (res.error) {
			setError("root", { message: res.error });
			return;
		}

		navigate("/login");
	};

	return (
		<section>
			<h1>Register</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="text"
					placeholder="Username"
					{...register("username", {
						required: "El username es obligatorio",
						minLength: { value: 3, message: "Mínimo 3 caracteres" },
					})}
				/>
				{errors.username && <p>{errors.username.message}</p>}
				<input
					type="email"
					placeholder="email@email.com"
					{...register("email", {
						required: "El email es obligatorio",
						pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: "Email no válido",
					})}
				/>
				{errors.email && <p>{errors.email.message}</p>}
				<input
					type="password"
					placeholder="Password"
					{...register("password", {
						required: "Contraseña obligatoria",
						minLength: { value: 8, message: "Mínimo 8 caracteres" },
					})}
				/>
				{errors.password && <p>{errors.password.message}</p>}
				<input type="file" accept="image/*" {...register("avatar")} />
				<button type="submit">Registrar</button>
				{errors.root && <p>{errors.root.message}</p>}
			</form>
		</section>
	);
};

export default Register;
