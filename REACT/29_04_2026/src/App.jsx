import "./App.css";
import Botones from "./components/Botones";
import Inspeccionador from "./components/Inspeccionador";
import EventosTeclado from "./components/EventosTeclado";
import Input from "./components/Input";
import Focus from "./components/Focus";
import Form from "./components/Form";

const App = () => {
  return (
    <div id="app">
      <Botones />
      <Inspeccionador />
      <EventosTeclado />
      <Input />
      <Focus />
      <Form />
    </div>
  );
};

export default App;
