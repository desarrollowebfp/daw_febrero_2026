const Input = () => {
  const detectarValor = (ev) => {
    console.log(ev.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Mira la consola"
        onChange={detectarValor}
      />
       <input
        type="date"
        onChange={detectarValor}
      />
      <select onChange={detectarValor}>
        <option value="primero">Primero</option>
        <option value="segundo">Segundo</option>
        <option value="tercero">Tercero</option>
      </select>
    </div>
  );
};

export default Input;
