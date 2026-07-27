import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { updateUsername } from "../services/api";
import { useAuth } from "../context/AuthContext";

const UsernameForm = ({ onMessage }) => {
	const { token, user, loadUser } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		reset,
	} = useForm({ defaultValues: { username: user?.username || "" } });

	useEffect(() => {
		reset({ username: user?.username || "" });
	}, [user, reset]);

	const onSubmit = async (data) => {
		const res = await updateUsername(token, data.username);
		if (res.error) {
			setError("root", { message: res.error });
			return;
		}
		loadUser();
		onMessage("Username modificado correctamente");
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 p-6 rounded-xl border border-secondary/10 bg-secondary/5"
		>
			<h2 className="font-semibold">Cambiar username</h2>
			<input
				type="text"
				className="w-full px-4 py-3 rounded-lg bg-primary border border-secondary/20 outline-none focus:border-highlight transition-colors"
				{...register("username", {
					required: "El username es obligatorio",
					minLength: { value: 3, message: "Mínimo 3 caracteres" },
				})}
			/>
			{errors.username && (
				<p className="text-highlight">{errors.username.message}</p>
			)}
			{errors.root && <p className="text-highlight">{errors.root.message}</p>}
			<button
				type="submit"
				className="mt-auto px-6 py-3 rounded-lg bg-highlight text-secondary font-semibold hover:opacity-90 transition-opacity cursor-pointer"
			>
				Guardar username
			</button>
		</form>
	);
};

export default UsernameForm;
