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
		<section className="max-w-md mx-auto py-10">
			<h1 className="text-md font-serif font-bold mb-6">Register</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col gap-4 p-6 rounded-xl border border-secondary/10 bg-secondary/5"
			>
				<div className="flex flex-col gap-1">
					<input
						type="text"
						placeholder="Username"
						className="w-full px-4 py-3 rounded-lg bg-primary border border-secondary/20 outline-none focus:border-highlight transition-colors"
						{...register("username", {
							required: "El username es obligatorio",
							minLength: { value: 3, message: "Mínimo 3 caracteres" },
						})}
					/>
					{errors.username && (
						<p className="text-highlight">{errors.username.message}</p>
					)}
				</div>
				<div className="flex flex-col gap-1">
					<input
						type="email"
						placeholder="email@email.com"
						className="w-full px-4 py-3 rounded-lg bg-primary border border-secondary/20 outline-none focus:border-highlight transition-colors"
						{...register("email", {
							required: "El email es obligatorio",
							pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							message: "Email no válido",
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
							required: "Contraseña obligatoria",
							minLength: { value: 8, message: "Mínimo 8 caracteres" },
						})}
					/>
					{errors.password && (
						<p className="text-highlight">{errors.password.message}</p>
					)}
				</div>
				<input
					type="file"
					accept="image/*"
					className="w-full text-secondary/70 file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border-0 file:bg-secondary/10 file:text-secondary file:cursor-pointer"
					{...register("avatar")}
				/>
				<button
					type="submit"
					className="w-full px-6 py-3 rounded-lg bg-highlight text-secondary font-semibold hover:opacity-90 transition-opacity cursor-pointer"
				>
					Registrar
				</button>
				{errors.root && (
					<p className="text-highlight text-center">{errors.root.message}</p>
				)}
			</form>
		</section>
	);
};

export default Register;
