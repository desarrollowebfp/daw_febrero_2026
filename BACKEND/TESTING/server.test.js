const request = require("supertest");
const server = require("./server");

describe("GET /api/abcdef", () => {
	it("La petición responde con status 404 y un mensaje que dice: 'Ruta no encontrada'", async () => {
		const res = await request(server).get("/api/abcdef");

		expect(res.status).toBe(404);
		expect(res.body).toStrictEqual({ message: "Ruta no encontrada" });
	});
});
