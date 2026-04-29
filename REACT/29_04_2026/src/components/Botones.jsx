const Botones = () => {
  const opcionA = () => console.log("Opción A");

  return (
    <div>
      <button onClick={opcionA}>Opción A</button>
      <button onClick={() => console.log("Opción B")}>Opción B</button>
      <button
        onClick={() => {
          console.log("Opción");
          console.log("C");
        }}
      >
        Opcion C
      </button>
    </div>
  );
};

export default Botones;
