//Importamos y configuramos en la misma linea dotenv para que sea capaz de leer las variables de entorno y utilizarlas
require("dotenv").config();

//Importamos tanto express como la función de conexión con la DB
const express = require("express");
const connect = require("./src/config/db");

//Conectamos la base de datos
connect();

//Definimos el puerto con otro en la recamara
const PORT = process.env.PORT || 3000;

//Creamos el servidor
const server = express();
//Configuramos el middleware para leer JSON
server.use(express.json());

//Ruta de bienvenida/prueba
server.get("/", (req, res) => {
  return res.status(200).json({
    message: "API REST de videojuegos",
  });
});

//Middleware de rutas no encontradas
server.use((req, res) => {
  return res.status(404).json({
    message: "Route Not Found",
  });
});

//Middleware de manejo de errores generales
server.use((error, req, res) => {
  return res.status(error.status || 500).json({
    message: error.message || "Error interno del servidor",
  });
});

//Levantamos y escuchamos el servidor
server.listen(PORT, () => {
  console.log(`🛜  Servidor levantado en http://localhost:${PORT}`);
});
