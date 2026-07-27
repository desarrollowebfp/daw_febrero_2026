import { memo, useCallback } from "react";

const TaskCard = memo(({ task, onEdit, onDelete }) => {
	const handleEdit = useCallback(() => onEdit(task), [task, onEdit]);
	const handleDelete = useCallback(
		() => onDelete(task._id),
		[task._id, onDelete],
	);

	return (
		<article className="flex flex-col gap-3 p-5 rounded-xl border border-secondary/10 bg-secondary/5 hover:border-secondary/25 transition-colors">
			<h3 className="font-semibold">{task.title}</h3>
			<p className="text-secondary/60">{task.date?.slice(0, 10)}</p>
			<p
				className={`self-start px-3 py-1 rounded-full ${
					task.status === "completed"
						? "bg-secondary/15 text-secondary/80"
						: "bg-highlight/20 text-highlight"
				}`}
			>
				{task.status}
			</p>
			<footer className="flex gap-2 mt-auto pt-2">
				<button
					onClick={handleEdit}
					className="px-4 py-2 rounded-lg border border-secondary/20 hover:border-highlight hover:text-highlight transition-colors cursor-pointer"
				>
					Editar
				</button>
				<button
					onClick={handleDelete}
					className="px-4 py-2 rounded-lg bg-highlight text-secondary hover:opacity-90 transition-opacity cursor-pointer"
				>
					Borrar
				</button>
			</footer>
		</article>
	);
});

export default TaskCard;
