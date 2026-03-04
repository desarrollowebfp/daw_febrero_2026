const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado con la base de datos");
  } catch (error) {
    console.error("No se pudo conectar con la base de datos", error.message);
  }
};

module.exports = connect;
