const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const isAuth = async (req, res, next) => {
	try {
		const authorization = req.headers.authorization;

		if (!authorization) {
			return res.status(401).json({ message: "No se encuentra el token" });
		}

		const token = authorization.replace("Bearer ", "");

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const user = await User.findById(decoded.id);

		if (!user) {
			return res.status(401).json({ message: "Token no valido" });
		}
		//Adjuntamos el usuario completo a la petición (req) para poder utilizarlo en los controladores y no tener que volver a buscar el usuario en cada uno de ellos
		req.user = user;
		next();
	} catch (error) {
		return res.status(401).json({ message: "Token no valido" });
	}
};

module.exports = isAuth;
