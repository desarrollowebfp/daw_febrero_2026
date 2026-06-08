import { createContext, useState } from "react";

export const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
	const [temaDark, setTemaDark] = useState(true);

	return (
		<TemaContext.Provider value={{ temaDark, setTemaDark }}>{children}</TemaContext.Provider>
	);
};
