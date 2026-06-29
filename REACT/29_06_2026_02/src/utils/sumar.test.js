import sumar from "./sumar";

describe("Sumar", () => {
	it("Sumar dos números positivos", () => {
		expect(sumar(2, 5)).toBe(7);
	});

	it("Funcionamiento con negativos", () => {
		expect(sumar(-2, -3)).toBe(-5);
	});

	it("El cero no cambia el numero", () => {
		expect(sumar(4, 0)).toBe(4);
	});

	it("Cuanto tiene un string devuelve null", () => {
		expect(sumar("4", 2)).toBe(null);
	});
});
