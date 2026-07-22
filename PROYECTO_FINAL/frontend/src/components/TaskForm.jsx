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
		if (taskEdit) {
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
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				placeholder="Título"
				{...register("title", {
					required: "El título de la tarea es obligatorio",
					minLength: { value: 3, message: "Mínimo 3 caracteres" },
				})}
			/>
			{errors.title && <p>{errors.title.message}</p>}
			<input
				type="date"
				{...register("date", {
					required: "La fecha es obligatoria",
				})}
			/>
			{errors.date && <p>{errors.date.message}</p>}
			<select {...register("status")}>
				<option value="pending">Pendiente</option>
				<option value="completed">Completada</option>
			</select>
			<button type="submit">
				{taskToEdit ? "Guardar los cambios" : "Crear tarea"}
			</button>
			{taskToEdit && (
				<button type="button" onClick={handleCancel}>
					Cancelar edición
				</button>
			)}
		</form>
	);
});

export default TaskForm;
