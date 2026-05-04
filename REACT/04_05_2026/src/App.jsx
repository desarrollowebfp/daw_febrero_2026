import "./App.css";
import Peliculas from "./components/Peliculas";

const App = () => {
  const peliculas = [
    {
      id: 1,
      title: "The Thing",
      year: 1982,
      director: "John Carpenter",
    },
    {
      id: 2,
      title: "The Matrix",
      year: 1995,
      director: "Wachowskis",
    },
    {
      id: 3,
      title: "The Godfather",
      year: 1986,
      director: "Francis Ford Coppola",
    },
  ];

  return (
    <>
      <h1>Movies</h1>
      <Peliculas peliculas={peliculas} />
      <p>
        Enlace ejemplos arquitectura:
        https://media.licdn.com/dms/image/v2/D4E22AQGnJqWkMhk7xA/feedshare-shrink_1280/B4EZ2mqKnHHMAM-/0/1776617564892?e=1779321600&v=beta&t=Jp12Rf_INhiuQgzgi6Ey1zdqcz8YKN0ih4N3padLSiA
      </p>
    </>
  );
};

export default App;
