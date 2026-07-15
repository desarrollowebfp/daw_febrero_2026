import { memo, useCallback } from "React";

const TaskCard = memo(({ task, onEdit, onDelete }) => {
	const handleEdit = useCallback(() => onEdit(task), [task, onEdit]);
	const handleDelete = useCallback(
		() => onDelete(task._id),
		[task._id, onDelete],
	);

	return (
		<article>
			<h3>{task.title}</h3>
			<p>{task.date?.slice(0, 10)}</p>
			<p>{task.status}</p>
			<button onClick={handleEdit}>Editar</button>
			<button onClick={handleDelete}>Borrar</button>
		</article>
	);
});

export default TaskCard;
