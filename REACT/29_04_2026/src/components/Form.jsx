const Form = () => {
  const alEnviar = (ev) => {
    ev.preventDefault()
    console.log("Formulario enviado");
  };

  return (
    <form onSubmit={alEnviar}>
      <input type="text" placeholder="username" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
