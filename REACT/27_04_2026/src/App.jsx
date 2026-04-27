import "./App.css";
import Lista from "./components/Lista";
import Header from "./components/Header";
import Button from "./components/Button";

const App = () => {
  const personajes = [
    {
      id: 1,
      nombre: "Rick Sanchez",
      imagen: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      especie: "Human",
    },
    {
      id: 2,
      nombre: "Morty Smith",
      imagen: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      especie: "Human",
    },
    {
      id: 3,
      nombre: "Summer Smith",
      imagen: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      especie: "Human",
    },
    {
      id: 4,
      nombre: "Beth Smith",
      imagen: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      especie: "Human",
    },
    {
      id: 5,
      nombre: "Jerry Smith",
      imagen: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      especie: "Human",
    },
    {
      id: 6,
      nombre: "Abadango Cluster Princess",
      imagen: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
      especie: "Alien",
    },
    {
      id: 7,
      nombre: "Abradolf Lincler",
      imagen: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
      especie: "Human",
    },
    {
      id: 8,
      nombre: "Adjudicator Rick",
      imagen: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
      especie: "Human",
    },
    {
      id: 9,
      nombre: "Agency Director",
      imagen: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
      especie: "Human",
    },
    {
      id: 10,
      nombre: "Alan Rails",
      imagen: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
      especie: "Human",
    },
    {
      id: 11,
      nombre: "Albert Einstein",
      imagen: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
      especie: "Human",
    },
    {
      id: 12,
      nombre: "Alexander",
      imagen: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
      especie: "Human",
    },
    {
      id: 13,
      nombre: "Alien Googah",
      imagen: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
      especie: "Alien",
    },
    {
      id: 14,
      nombre: "Alien Morty",
      imagen: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
      especie: "Alien",
    },
    {
      id: 15,
      nombre: "Alien Rick",
      imagen: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
      especie: "Alien",
    },
    {
      id: 16,
      nombre: "Amish Cyborg",
      imagen: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
      especie: "Alien",
    },
    {
      id: 17,
      nombre: "Annie",
      imagen: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
      especie: "Human",
    },
    {
      id: 18,
      nombre: "Antenna Morty",
      imagen: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
      especie: "Human",
    },
    {
      id: 19,
      nombre: "Antenna Rick",
      imagen: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
      especie: "Human",
    },
    {
      id: 20,
      nombre: "Ants in my Eyes Johnson",
      imagen: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
      especie: "Human",
    },
  ];

  const login = () => {
    alert("Login!");
  };

  const logout = () => {
    alert("Logout");
  };

  return (
    <>
      <Button handleClick={login}>Login</Button>
      <Button handleClick={logout}>Logout</Button>
      <Header />
      <Lista listado={personajes} />
    </>
  );
};

export default App;
