const Focus = () => {
  const alEnfocar = () => {
    console.log("Enfoco");
  };
  const alDesenfocar = () => {
    console.log("Desenfoco");
  };

  return (
    <input
      type="text"
      placeholder="Entra y sal de este input"
      onFocus={alEnfocar}
      onBlur={alDesenfocar}
    />
  );
};

export default Focus;
