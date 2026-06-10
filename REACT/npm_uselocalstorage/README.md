# useLocalStorage

Este es un custom hook para utilizar un useState al uso pero que guarde y recupere información de una clave definida en el localStorage

```js
import useLocalStorage from "../hooks/useLocalStorage";
```

Ejemplo de uso

```js
import useLocalStorage from "../hooks/useLocalStorage";

const Saludo = () => {
	const [nombre, setNombre] = useLocalStorage("nombre", "");

	return (
		<>
			<input
				type="text"
				value={nombre}
				onChange={(ev) => setNombre(ev.target.value)}
			/>
			<p>Hola {nombre}</p>
		</>
	);
};

export default Saludo;

```