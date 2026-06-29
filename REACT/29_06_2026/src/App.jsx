import "./App.css";
import { useState } from "react";
import Markdown from "react-markdown";
import posts from "./data/posts";

const App = () => {
	const [postActivo, setPostActivo] = useState(null);

	if (postActivo) {
		return (
			<>
				<button onClick={() => setPostActivo(null)}>⬅️ Volver</button>
				<h2>#{postActivo.id}</h2>
				<Markdown>{postActivo.contenido}</Markdown>
			</>
		);
	}

	return (
		<>
			<h1>Mi primer blog</h1>
			<ul id="titles">
				{posts.map((post) => (
					<li key={post.id} onClick={() => setPostActivo(post)}>
						{post.titulo}
					</li>
				))}
			</ul>
		</>
	);
};

export default App;
