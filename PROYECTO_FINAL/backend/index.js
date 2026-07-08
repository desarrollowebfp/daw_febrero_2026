require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const usersRoutes = require("./src/routes/users.routes");
const tasksRoutes = require("./src/routes/tasks.routes");

const server = express();

const PORT = process.env.PORT || 3000;

connectDB();

server.use(
	cors({
		origin: "URL DEL FRONTAL",
	}),
);

server.use(express.json());

server.use("/api/users", usersRoutes);
server.use("/api/tasks", tasksRoutes);

server.use((req, res) => {
	return res.status(404).json({ message: "Ruta no encontrada" });
});

server.use((error, req, res, next) => {
	console.log(error);
	return res.status(500).json({ message: error.message });
});

server.listen(PORT, () => {
	console.log(`Servidor levantado en http://localhost:${PORT} ✅`);
});
