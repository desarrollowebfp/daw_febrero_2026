import "./App.css";
import Header from "./components/Header";
import Enlace from "./components/Enlace";

const App = () => {
  return (
    <>
      <Header />
      <Enlace>Home</Enlace>
      <Enlace>Gallery</Enlace>
      <Enlace>About</Enlace>
    </>
  );
};

export default App;
