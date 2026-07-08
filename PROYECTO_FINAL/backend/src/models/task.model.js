const mongoose = require("mongoose");
const { statusEnum } = require("../utils/enums");

const taskSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, trim: true },
		date: { type: Date, required: true },
		status: { type: String, default: "pending", enum: statusEnum },
		user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
