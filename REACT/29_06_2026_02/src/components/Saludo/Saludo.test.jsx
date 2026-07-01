import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Saludo from "./Saludo";

describe("Saludo", () => {
	it("Cambia el saludo al pulsar el botón", async () => {
		const user = userEvent.setup();
		render(<Saludo />);

		expect(screen.getByText("Hola, clase")).toBeInTheDocument();

		await user.type(screen.getByTestId("input"), "Agustin");
		await user.click(screen.getByRole("button", { name: "Saludar" }));
		expect(screen.getByText("Hola, Agustin")).toBeInTheDocument();
	});

	it("El botón Saludar empieza deshabilitado", () => {
		render(<Saludo />);
		expect(screen.getByRole("button", { name: "Saludar" })).toBeDisabled();
	});

	it("El botón Saludar se habilita al escribir", async () => {
		const user = userEvent.setup();
		render(<Saludo />);

		await user.type(screen.getByTestId("input"), "Agustin");

		expect(screen.getByRole("button", { name: "Saludar" })).toBeEnabled();
	});
});
