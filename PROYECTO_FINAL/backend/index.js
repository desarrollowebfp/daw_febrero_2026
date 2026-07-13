require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const usersRoutes = require("./src/routes/users.routes");
const tasksRoutes = require("./src/routes/tasks.routes");

const notFoundHandler = require("./src/utils/notFoundHandler");
const errorHandler = require("./src/utils/errorHandler");

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

server.use(notFoundHandler);
server.use(errorHandler);

server.listen(PORT, () => {
	console.log(`Servidor levantado en http://localhost:${PORT} ✅`);
});
