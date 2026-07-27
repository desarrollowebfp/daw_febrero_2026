import { memo, useEffect } from "react";
import { useForm } from "react-hook-form";

const TaskForm = memo(({ onSubmitTask, taskToEdit, clearTaskToEdit }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm({ defaultValues: { title: "", date: "", status: "pending" } });

	useEffect(() => {
		if (taskToEdit) {
			setValue("title", taskToEdit.title);
			setValue("date", taskToEdit.date?.slice(0, 10));
			setValue("status", taskToEdit.status);
		}
	}, [taskToEdit, setValue]);

	const onSubmit = (data) => {
		onSubmitTask(data);
		reset();
	};

	const handleCancel = () => {
		clearTaskToEdit();
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-4 p-6 rounded-xl border border-secondary/10 bg-secondary/5"
		>
			<div className="flex flex-col sm:flex-row gap-4">
				<div className="flex flex-col gap-1 flex-1">
					<input
						type="text"
						placeholder="Título"
						className="w-full px-4 py-3 rounded-lg bg-primary border border-secondary/20 outline-none focus:border-highlight transition-colors"
						{...register("title", {
							required: "El título de la tarea es obligatorio",
							minLength: { value: 3, message: "Mínimo 3 caracteres" },
						})}
					/>
					{errors.title && (
						<p className="text-highlight">{errors.title.message}</p>
					)}
				</div>
				<div className="flex flex-col gap-1">
					<input
						type="date"
						className="w-full px-4 py-3 rounded-lg bg-primary border border-secondary/20 outline-none focus:border-highlight transition-colors"
						{...register("date", {
							required: "La fecha es obligatoria",
						})}
					/>
					{errors.date && (
						<p className="text-highlight">{errors.date.message}</p>
					)}
				</div>
				<select
					className="px-4 py-3 rounded-lg bg-primary border border-secondary/20 outline-none focus:border-highlight transition-colors cursor-pointer"
					{...register("status")}
				>
					<option value="pending">Pendiente</option>
					<option value="completed">Completada</option>
				</select>
			</div>
			<div className="flex flex-wrap gap-3">
				<button
					type="submit"
					className="px-6 py-3 rounded-lg bg-highlight text-secondary font-semibold hover:opacity-90 transition-opacity cursor-pointer"
				>
					{taskToEdit ? "Guardar los cambios" : "Crear tarea"}
				</button>
				{taskToEdit && (
					<button
						type="button"
						onClick={handleCancel}
						className="px-6 py-3 rounded-lg border border-secondary/20 hover:border-highlight hover:text-highlight transition-colors cursor-pointer"
					>
						Cancelar edición
					</button>
				)}
			</div>
		</form>
	);
});

export default TaskForm;
