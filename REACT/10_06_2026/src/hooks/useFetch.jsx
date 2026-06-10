import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [datos, setDatos] = useState(null);
	const [cargando, setCargando] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setCargando(true);
		setError(null);

		fetch(url)
			.then((res) => {
				if (!res.ok) throw new Error("Error en la petición");
				return res.json();
			})
			.then((res) => setDatos(res))
			.catch((error) => setError(error.message))
			.finally(() => setCargando(false));
	}, [url]);

	return { datos, cargando, error };
};

export default useFetch;
