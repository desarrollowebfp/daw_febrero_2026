const Tarjeta = ({ titulo, anio, poster }) => {
	return (
		<article className="border border-gray-200 rounded-lg p-4 max-w-sm flex gap-4 items-center hover:shadow-lg transition cursor-pointer">
			<img src={poster} alt={titulo} className="w-20 h-28 object-cover rounded" />
			<div>
				<h2 className="text-xl font-semibold">{titulo}</h2>
				<p className="text-sm text-gray-500">{anio}</p>
			</div>
		</article>
	);
};

export default Tarjeta;
