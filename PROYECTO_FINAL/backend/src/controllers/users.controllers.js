const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const register = async (req, res, next) => {
	try {
		const { username, email, password } = req.body;
		if (!username || !email || !password) {
			return res.status(400).json({ message: "Faltan campos obligatorios" });
		}

		const newUser = new User({
			username,
			email,
			password,
			avatar: req.file ? req.file.path : undefined,
		});

		await newUser.save();

		return res.status(200).json({ data: "Usuario creado correctamente" });
	} catch (error) {
		return next(error);
	}
};

const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: "Faltan campos obligatorios" });
		}

		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: "Usuario no encontrado" });
		}

		const passwordMatch = bcrypt.compareSync(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ message: "Contraseña incorrecta" });
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "7d",
		});

		const userLogin = await User.findById(user._id).select("-password");
		return res.status(200).json({ token, user: userLogin });
	} catch (error) {
		return next(error);
	}
};

const getMe = async (req, res, next) => {
	try {
		const user = await User.findById(req.user._id).select("-password");
		return res.status(200).json(user);
	} catch (error) {
		return next(error);
	}
};

const updateUsername = async (req, res, next) => {
	try {
		const { username } = req.body;
		if (!username) {
			return res.status(400).json({ message: "Faltan campos obligatorios" });
		}

		req.user.username = username;

		await req.user.save();

		return res.status(200).json({ data: "Usuario modificado correctamente" });
	} catch (error) {
		return next(error);
	}
};

const updatePassword = async (req, res, next) => {
	try {
		const { currentPassword, newPassword } = req.body;
		if (!currentPassword || !newPassword) {
			return res.status(400).json({ message: "Faltan campos obligatorios" });
		}
		const passwordMatch = bcrypt.compareSync(
			currentPassword,
			req.user.password,
		);
		if (!passwordMatch) {
			return res.status(401).json({ message: "Contraseña incorrecta" });
		}

		req.user.password = newPassword;
		await req.user.save();
		return res
			.status(200)
			.json({ data: "Contraseña modificada correctamente" });
	} catch (error) {
		return next(error);
	}
};

const updateAvatar = async (req, res, next) => {
	try {
		if (!req.file) {
			return res.status(400).json({ message: "Fichero obligatorio" });
		}

		req.user.avatar = req.file.path;
		await req.user.save();
		return res.status(200).json({ data: "Avatar modificado correctamente" });
	} catch (error) {
		return next(error);
	}
};

module.exports = {
	register,
	login,
	getMe,
	updateUsername,
	updatePassword,
	updateAvatar,
};
