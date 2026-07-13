const Task = require("../models/task.model");

const getTasks = async (req, res, next) => {
	try {
		//ejemplo: /api/tasks?status=pending&sort=date_asc
		const { status, date, sort } = req.query;
		const filter = { user: req.user._id };

		if (status && ["pending", "completed"].includes(status)) {
			filter.status = status;
		}

		if (date) {
			const startDate = new Date(date);
			const endDate = new Date(date);
			endDate.setHours(23, 59, 59, 999);

			filter.date = { $gte: startDate, $lte: endDate };
		}

		let query = Task.find(filter);

		if (sort === "date_asc") query = query.sort({ date: 1 });
		if (sort === "date_desc") query = query.sort({ date: -1 });
		if (sort === "status_asc") query = query.sort({ status: 1 });
		if (sort === "status_desc") query = query.sort({ status: -1 });

		const tasks = await query;

		return res.status(200).json(tasks);
	} catch (error) {
		return next(error);
	}
};

const createTask = async (req, res, next) => {
	try {
		const { title, date, status } = req.body;
		if (!title || !date) {
			return res.status(400).json({ message: "Campos obligatorios faltantes" });
		}
		const newTask = new Task({
			title,
			date,
			status,
			user: req.user._id,
		});

		const taskSaved = await newTask.save();
		return res.status(200).json(taskSaved);
	} catch (error) {
		return next(error);
	}
};

const updateTask = async (req, res, next) => {
	try {
		const { title, date, status } = req.body;
		const task = await Task.findOne({ _id: req.params.id, user: req.user._id });
		if (!task) {
			return res.status(400).json({ message: "No se encuentra la tarea" });
		}

		if (title !== undefined) task.title = title;
		if (date !== undefined) task.date = date;
		if (status !== undefined) task.status = status;

		const taskUpdated = await task.save();
		return res.status(200).json(taskUpdated);
	} catch (error) {
		return next(error);
	}
};

const deleteTask = async (req, res, next) => {
	try {
		const task = await Task.findOneAndDelete({
			_id: req.params.id,
			user: req.user._id,
		});

		if (!task) {
			return res.status(404).json({ message: "Tarea no encontrada" });
		}

		return res.status(200).json({ data: "Tarea borrada correctamente" });
	} catch (error) {
		return next(error);
	}
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
