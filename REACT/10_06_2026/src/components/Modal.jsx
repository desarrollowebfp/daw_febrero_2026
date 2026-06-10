import useToggle from "../hooks/useToggle";

const Modal = () => {
    const [abierto, alternar] = useToggle();

	return (
		<div>
			<button onClick={alternar}>
                {abierto ? "Cerrar" : "Abrir"}
            </button>
            {abierto && <p>Contenido del modal</p>}
		</div>
	);
};

export default Modal;
