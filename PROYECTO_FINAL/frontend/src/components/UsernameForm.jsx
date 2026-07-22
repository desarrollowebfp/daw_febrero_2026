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
		<form onSubmit={handleSubmit(onSubmit)}>
			<h2>Cambiar username</h2>
			<input
				type="text"
				{...register("username", {
					required: "El username es obligatorio",
					minLenght: { value: 3, message: "Mínimo 3 caracteres" },
				})}
			/>
			{errors.username && <p>{errors.username.message}</p>}
			{errors.root && <p>{errors.root.messageF}</p>}
			<button type="submit">Guardar username</button>
		</form>
	);
};

export default UsernameForm;
