import { useForm } from "react-hook-form";
import { updatePassword } from "../services/api";
import { useAuth } from "../context/AuthContext";

const PasswordForm = ({ onMessage }) => {
	const { token } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		reset,
		watch,
	} = useForm();

	const newPassword = watch("newPassword");

	const onSubmit = async (data) => {
		const res = await updatePassword(
			token,
			data.currentPassword,
			data.newPassword,
		);

		if (!res.message || res.error) {
			setError("root", {
				message: res.message || res.error || "Error al cambiar la contraseña",
			});
			return;
		}

		onMessage(res.message);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="password"
				placeholder="Contraseña actual"
				{...register("currentPassword", {
					required: "Introduce la contraseña actual",
				})}
			/>
			{errors.currentPassword && <p>{errors.currentPassword.message}</p>}
			<input
				type="password"
				placeholder="Nueva contraseña"
				{...register("newPassword", {
					required: "Introduce la nueva contraseña",
					minLength: { value: 8, message: "Mínimo 8 caracteres" },
				})}
			/>
			{errors.newPassword && <p>{errors.newPassword.message}</p>}
			<input
				type="password"
				placeholder="Confirma nueva contraseña"
				{...register("confirmPassword", {
					required: "Confirma la nueva contraseña",
					validate: (value) =>
						value === newPassword || "Las contraseñas no coinciden",
				})}
			/>
			{errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
			<button type="submit">Guardar contraseña</button>
			{errors.root && <p>{errors.root.message}</p>}
		</form>
	);
};

export default PasswordForm;
