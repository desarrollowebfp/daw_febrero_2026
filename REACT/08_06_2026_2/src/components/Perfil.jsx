import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Perfil = () => {
	const { user } = useContext(UserContext);

	if (!user) {
		return <p>No profile</p>;
	} else {
		return (
			<section>
				<h2>Profile</h2>
				<p>{user.name}</p>
				<p>{user.email}</p>
			</section>
		);
	}
};

export default Perfil;
