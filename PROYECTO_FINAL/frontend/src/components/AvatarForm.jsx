import { useForm } from "react-hook-form";
import { updateAvatar } from "../services/api";
import { useAuth } from "../context/AuthContext.jsx";

const AvatarForm = ({ onMessage }) => {
	const { token, loadUser } = useAuth();
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		reset,
	} = useForm();

	const onSubmit = async (data) => {
		if (!data.avatar?.[0]) {
			setError("avatar", { message: "Selecciona una  imagen" });
			return;
		}

		const formData = new FormData();
		formData.append("avatar", data.avatar[0]);

		const res = await updateAvatar(token, formData);

		if (res.error) {
			setError("root", { message: res.error });
			return;
		}

		loadUser();
		onMessage("Avatar actualizado correctamente");
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 p-6 rounded-xl border border-secondary/10 bg-secondary/5"
		>
			<h2 className="font-semibold">Cambiar avatar</h2>
			<input
				type="file"
				accept="image/*"
				className="w-full text-secondary/70 file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border-0 file:bg-secondary/10 file:text-secondary file:cursor-pointer"
				{...register("avatar")}
			/>
			{errors.avatar && (
				<p className="text-highlight">{errors.avatar.message}</p>
			)}
			{errors.root && <p className="text-highlight">{errors.root.message}</p>}
			<button
				type="submit"
				className="mt-auto px-6 py-3 rounded-lg bg-highlight text-secondary font-semibold hover:opacity-90 transition-opacity cursor-pointer"
			>
				Guardar avatar
			</button>
		</form>
	);
};

export default AvatarForm;
