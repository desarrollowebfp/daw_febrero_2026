import useFetch from "../hooks/useFetch";

const Personajes = () => {
	const { datos, cargando, error } = useFetch(
		"https://rickandmortyapi.com/api/character",
	);

	if (cargando) {
		return <p>Cargando...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<>
			<h2>Personajes</h2>
			{datos.results.map((character) => (
				<p key={character.id}>{character.name}</p>
			))}
		</>
	);
};

export default Personajes;
