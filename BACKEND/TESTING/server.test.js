const request = require("supertest");
const server = require("./server");
const {
	getAllMovies,
	getMovieById,
} = require("./src/repository/movie.repository");

jest.mock("./src/config/db.js", () => null);
jest.mock("./src/repository/movie.repository.js");

describe("GET /api/abcdef", () => {
	it("La petición responde con status 404 y un mensaje que dice: 'Ruta no encontrada'", async () => {
		const res = await request(server).get("/api/abcdef");

		expect(res.status).toBe(404);
		expect(res.body).toStrictEqual({ message: "Ruta no encontrada" });
	});
});

describe("GET /api/movies", () => {
	it("Responde con un código de status 200 y un array vacío de películas", async () => {
		getAllMovies.mockImplementation(() => []);

		const res = await request(server).get("/api/movies");
		expect(res.status).toBe(200);
		expect(res.body).toStrictEqual({ data: [] });
	});
});

describe("GET /api/movies/:id", () => {
	it("Responde con un status 404 si el id no es un id válido", async () => {
		getMovieById.mockImplementation((id) => {
			if (id === "valid_id") {
				return {};
			} else {
				throw new Error();
			}
		});

		const res = await request(server).get("/api/movies/123");
		expect(res.status).toBe(404);
		expect(res.body).toStrictEqual({ message: "Movie not found" });
	});

	it("Responder con un status 200 y la película correspondiente", async () => {
		getMovieById.mockImplementation((id) => {
			if (id === "69d3f1489d138786a4654d36") {
				return {
					title: "El Padrino",
					director: "Coppola",
					year: 1972,
					watched: false,
				};
			} else {
				throw new Error();
			}
		});
		const res = await request(server).get(
			"/api/movies/69d3f1489d138786a4654d36",
		);
		expect(res.status).toBe(200);
		expect(res.body).toStrictEqual({
			data: {
				title: "El Padrino",
				director: "Coppola",
				year: 1972,
				watched: false,
			},
		});
	});
});
