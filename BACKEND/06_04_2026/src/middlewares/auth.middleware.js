const User = require("../api/models/user.model");
const { verifyToken } = require("../utils/token");

const isAuth = async (req, res, next) => {
  try {
    // Troceamos el token para eliminar la palabra Bearer de las cabeceras y poder comprobar si el token en si es valido
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json("No existe el token");
    }
    // Verificamos si el token es correcto
    const decoded = verifyToken(token);
    // Buscamos al usuario correspondiente mediante las partes del token para saber si es un usuario correcto
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json("Usuario no encontrado o token no valido");
    }

    // Si el usuario existe y el token es correcto dejamos pasar al controlador que hemos protegido
    next();
  } catch (error) {
    return res.status(401).json("No autorizado");
  }
};

module.exports = isAuth;
