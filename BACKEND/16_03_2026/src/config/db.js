const mongoose = require("mongoose");

//Creamos la función de conexión y nos conectamos mediante la URI de MongoAtlas almacenada en la variable de entorno MONGODB_URI
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ Conectado con la base de datos`);
  } catch (error) {
    console.error("❌ Error conectado con la base de datos", error.message);
  }
};

module.exports = connect;
