require("dotenv").config();
const express = require("express");
const connect = require("./src/config/db");

const server = express();
server.use(express.json());

connect();

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
