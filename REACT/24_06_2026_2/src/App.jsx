import Button from "./components/Button";
import { ThemeProvider } from "styled-components";
import tema from "./styled/tema";
import EstilosGlobales from "./styled/EstilosGlobales";

const App = () => {
	return (
		<ThemeProvider theme={tema}>
			<EstilosGlobales />
			<Button>Login</Button>
			<Button>Register</Button>
		</ThemeProvider>
	);
};

export default App;
