import "./App.css";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Avatar from "./components/Avatar";

const App = () => {
  return (
    <>
      <Flex>
        <Title>Hola</Title>
        <Title>Adios</Title>
        <Title>Buenas</Title>
        <Title>Que tal</Title>
        <Avatar
          username="Hasbullah"
          image="https://pbs.twimg.com/profile_images/1851578164176392192/1bsxJwGn_400x400.jpg"
        />
        <Avatar username="Hasbullah" />
        <Avatar
          username="Hasbullah"
          image="https://pbs.twimg.com/profile_images/1851578164176392192/1bsxJwGn_400x400.jpg"
          size="small"
        />
        <Avatar username="Hasbullah" size="large"/>
      </Flex>
    </>
  );
};

export default App;
