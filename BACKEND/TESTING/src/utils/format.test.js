const {toUpperTitle, titleWithYear} = require("./format");

describe("Función util de formato", () => {
	it("Retorna el título de una película en mayúsculas", () => {
		const result = toUpperTitle("El Padrino");
		expect(result).toBe("EL PADRINO");
	});

    it("Retorna el titulo con el año dentro de unos parentesis", () => {
        const result = titleWithYear("El Padrino", 1972);
        expect(result).toBe("El Padrino (1972)");
    })
});
