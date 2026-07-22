import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getTasks, createTask, updateTask, deleteTask } from "../services/api";
import TaskForm from "../components/TaskForm";
import TaskFilters from "../components/TaskFilters";
import TaskList from "../components/TaskList";

const Dashboard = () => {
	const { token, user } = useAuth();
	const [tasks, setTasks] = useState([]);
	const [taskToEdit, setTaskToEdit] = useState(null);
	const [filters, setFilters] = useState({ status: "", date: "", sort: "" });

	const loadTasks = useCallback(async () => {
		const res = await getTasks(token, filters);
		setTasks(res || []);
	}, [token, filters]);

	useEffect(() => {
		loadTasks();
	}, [loadTasks]);

	const handleSubmitTask = useCallback(
		async (formData) => {
			if (taskEdit) {
				await updateTask(token, taskToEdit._id, formData);
				setTaskToEdit(null);
			} else {
				await createTask(token, formData);
			}
			loadTasks();
		},
		[token, taskToEdit, loadTasks],
	);

	const handleDeleteTask = useCallback(
		async (id) => {
			await deleteTask(token, id);
			loadTasks();
		},
		[token, loadTasks],
	);

	const clearTaskToEdit = useCallback(() => setTaskToEdit(null), []);

	return (
		<section>
			<h1>Dashboard</h1>
			<p>Hola {user?.username}</p>
			<TaskForm
				onSubmitTask={handleSubmitTask}
				taskToEdit={taskToEdit}
				clearTaskToEdit={clearTaskToEdit}
			/>
			<TaskFilters filters={filters} setFilters={setFilters} />
			<TaskList
				tasks={tasks}
				onEdit={setTaskToEdit}
				onDelete={handleDeleteTask}
			/>
		</section>
	);
};
