const express = require("express");
require("./src/config/db.js");
const movieRepository = require("./src/repository/movie.repository.js");

const server = express();
server.use(express.json());
const router = express.Router();

router.get("/movies", async (req, res) => {
	const movies = await movieRepository.getAllMovies();
	return res.status(200).json({ data: movies });
});

router.get("/movies/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const movie = await movieRepository.getMovieById(id);
		return res.status(200).json({ data: movie });
	} catch (error) {
		return res.status(404).json({ message: "Movie not found" });
	}
});

server.use("/api", router);

server.use((req, res) => {
	return res.status(404).json({ message: "Ruta no encontrada" });
});

module.exports = server;
