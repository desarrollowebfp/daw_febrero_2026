import { memo } from "react";

const controlClasses =
	"px-4 py-3 rounded-lg bg-primary border border-secondary/20 outline-none focus:border-highlight transition-colors cursor-pointer";

const TaskFilters = memo(({ filters, setFilters }) => {
	return (
		<section className="flex flex-col sm:flex-row flex-wrap gap-4">
			<select
				className={controlClasses}
				value={filters.status}
				onChange={(ev) => setFilters({ ...filters, status: ev.target.value })}
			>
				<option value="">Todos los estados</option>
				<option value="pending">Pendientes</option>
				<option value="completed">Completadas</option>
			</select>
			<input
				type="date"
				className={controlClasses}
				value={filters.date}
				onChange={(ev) => setFilters({ ...filters, date: ev.target.value })}
			/>
			<select
				className={controlClasses}
				value={filters.sort}
				onChange={(ev) => setFilters({ ...filters, sort: ev.target.value })}
			>
				<option value="">Sin ordenar</option>
				<option value="date_asc">Fecha ascendente</option>
				<option value="date_desc">Fecha descendente</option>
				<option value="status_asc">Estado ascendente</option>
				<option value="status_desc">Estado descendente</option>
			</select>
		</section>
	);
});

export default TaskFilters;
