import { useContext, useRef } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
	const { login } = useContext(UserContext);
	const username = useRef(null);
	const usermail = useRef(null);

	const handleLogin = () => {
		login(username.current.value, usermail.current.value);
	};

	return (
		<section>
			<input type="text" placeholder="username" ref={username} />
			<input type="text" placeholder="email" ref={usermail} />
			<button onClick={handleLogin}>Login</button>
		</section>
	);
};

export default Login;
