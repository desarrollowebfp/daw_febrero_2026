import { memo } from "react";
import TaskCard from "./TaskCard";

const TaskList = memo(({ tasks, onEdit, onDelete }) => {
	if (!tasks.length) {
		return (
			<p className="text-center text-secondary/50 py-10">
				No hay tareas todavía
			</p>
		);
	}

	return (
		<section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{tasks.map((task) => (
				<TaskCard
					key={task._id}
					task={task}
					onEdit={onEdit}
					onDelete={onDelete}
				/>
			))}
		</section>
	);
});

export default TaskList;
