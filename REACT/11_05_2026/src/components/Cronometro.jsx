import { useState, useEffect } from "react";

const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    console.log("Arrancando intervalo");

  
    /* return () => {
      clearInterval(id);
    }; */
  }, [segundos]);

  return (
    <>
      <h2>Cronometro - {segundos}</h2>
    </>
  );
};

export default Cronometro;
