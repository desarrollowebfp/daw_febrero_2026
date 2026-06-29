import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contador from "./Contador";

describe("Contador", () => {
	it("Muestra la etiqueta que recibe por prop", () => {
		render(<Contador etiqueta="Alumnos" />);
		expect(
			screen.getByRole("heading", { name: "Alumnos" }),
		).toBeInTheDocument();
	});

	it("Muestra el texto Incrementar en un button", () => {
		render(<Contador />);
		expect(
			screen.getByRole("button", { name: "Incrementar" }),
		).toBeInTheDocument();
	});

    it("El valor muestra correctamente su texto y valor inicial", () => {
        render(<Contador/>)
        expect(screen.getByTestId("valor")).toHaveTextContent("Valor: 0")
    })

    it("Incrementa el valor pulsando el botón 'Incrementar'", async () => {
        const user = userEvent.setup()
        render(<Contador/>)

        //Antes de pulsar
        expect(screen.getByText("Valor: 0")).toBeInTheDocument()

        //Pulsamos el botón
        const btn = screen.getByRole("button", {name: "Incrementar"})
        await user.click(btn);

        //Despues de pulsar
        expect(screen.getByText("Valor: 1")).toBeInTheDocument()
    })
});
