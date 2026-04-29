const Inspeccionador = () => {
  const verEvento = (ev) => {
    console.log("Evento completo", ev);
    console.log("Tipo evento", ev.type);
    console.log("Elemento clicado", ev.target);
    console.log("Texto del elemento", ev.target.textContent);
  };

  return <button onClick={verEvento}>Ver evento</button>;
};

export default Inspeccionador;
