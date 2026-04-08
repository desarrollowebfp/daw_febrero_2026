const User = require("../models/user.model");
const createError = require("../../utils/createError");
const bcrypt = require("bcrypt");
const { createToken } = require("../../utils/token");

const register = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    //Intentamos encontrar el usuario para no tener el mismo email o el mismo username repetido en la DB

    const userEmailExist = await User.findOne({ email: newUser.email });
    const userUserNameExist = await User.findOne({
      username: newUser.username,
    });

    /* if (userEmailExist) {
      return next(createError("Email de usuario existente", 400));
    }
    if (userUserNameExist) {
      return next(createError("Nombre de usuario existente", 400));
    } */
    if (userEmailExist || userUserNameExist) {
      return next(createError("No se puede crear el usuario", 400));
    }
    // No creamos una nueva constante porque no queremos enseñar el usuario en la respuesta
    await newUser.save();
    return res.status(201).json({ message: "Usuario creado" });
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(createError("No se ha encontrado el usuario", 404));
    }
    //Vamos a comparar la contraseña del body con la hasheada para ver si es la misma
    const validPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!validPassword) {
      return next(createError("Contraseña incorrecta", 400));
    }
    //Generar el token
    const token = createToken(user._id, user.email);
    return res.status(200).json(token);
  } catch (error) {
    return next(error);
  }
};
module.exports = { register, login };
