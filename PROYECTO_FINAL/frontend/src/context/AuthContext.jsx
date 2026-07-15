import {
	createContext,
	useCallback,
	useContext,
	useState,
	useEffect,
} from "react";

import { getMe } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token") || "");
	const [user, setUser] = useState(null);

	const loadUser = useCallback(async () => {
		if (!token) {
			setUser(null);
			return;
		}

		const res = await getMe(token);

		if (res.error) {
			localStorage.removeItem("token");
			setToken("");
			setUser(null);
			return;
		}

		setUser(res);
	}, [token]);

	useEffect(() => {
		loadUser();
	}, [loadUser]);

	const login = useCallback((newToken, userData) => {
		localStorage.setItem("token", newToken);
		setToken(newToken);
		setUser(userData);
	}, []);

	const logout = useCallback(() => {
		localStorage.removeItem("token");
		setToken("");
		setUser(null);
	}, []);

	return (
		<AuthContext.Provider
			value={{ token, user, setUser, login, logout, loadUser }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
