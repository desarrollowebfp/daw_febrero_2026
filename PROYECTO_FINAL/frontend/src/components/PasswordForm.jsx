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

		onMessage("Contraseña modificada correctamente");
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 p-6 rounded-xl border border-secondary/10 bg-secondary/5 md:row-span-2"
		>
			<h2 className="font-semibold">Cambiar contraseña</h2>
			<div className="flex flex-col gap-1">
				<input
					type="password"
					placeholder="Contraseña actual"
					className="w-full px-4 py-3 rounded-lg bg-primary border border-secondary/20 outline-none focus:border-highlight transition-colors"
					{...register("currentPassword", {
						required: "Introduce la contraseña actual",
					})}
				/>
				{errors.currentPassword && (
					<p className="text-highlight">{errors.currentPassword.message}</p>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<input
					type="password"
					placeholder="Nueva contraseña"
					className="w-full px-4 py-3 rounded-lg bg-primary border border-secondary/20 outline-none focus:border-highlight transition-colors"
					{...register("newPassword", {
						required: "Introduce la nueva contraseña",
						minLength: { value: 8, message: "Mínimo 8 caracteres" },
					})}
				/>
				{errors.newPassword && (
					<p className="text-highlight">{errors.newPassword.message}</p>
				)}
			</div>
			<div className="flex flex-col gap-1">
				<input
					type="password"
					placeholder="Confirma nueva contraseña"
					className="w-full px-4 py-3 rounded-lg bg-primary border border-secondary/20 outline-none focus:border-highlight transition-colors"
					{...register("confirmPassword", {
						required: "Confirma la nueva contraseña",
						validate: (value) =>
							value === newPassword || "Las contraseñas no coinciden",
					})}
				/>
				{errors.confirmPassword && (
					<p className="text-highlight">{errors.confirmPassword.message}</p>
				)}
			</div>
			<button
				type="submit"
				className="mt-auto px-6 py-3 rounded-lg bg-highlight text-secondary font-semibold hover:opacity-90 transition-opacity cursor-pointer"
			>
				Guardar contraseña
			</button>
			{errors.root && <p className="text-highlight">{errors.root.message}</p>}
		</form>
	);
};

export default PasswordForm;
