import "./App.css";
import Component from "./components/Component";
import Cronometro from "./components/Cronometro";
import { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <Component />
    </>
  );
};

export default App;
