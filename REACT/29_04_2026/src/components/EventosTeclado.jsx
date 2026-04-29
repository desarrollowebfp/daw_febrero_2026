const EventosTeclado = () => {
  const detectarTecla = (ev) => {
    console.log(ev.code);
    if(ev.code === "Enter"){
        console.log("Has pulsado la tecla Enter")
    }
  };

  return (
    <input
      type="text"
      placeholder="Pulsa una tecla"
      onKeyDown={detectarTecla}
    />
  );
};

export default EventosTeclado;
