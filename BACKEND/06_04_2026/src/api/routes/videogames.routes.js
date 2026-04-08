const express = require("express");
const router = express.Router();
const isAuth = require("../../middlewares/auth.middleware");

const {
  getVideogames,
  getVideogameByID,
  getVideogamesByGenre,
  getVideogamesByConsole,
  createVideogame,
} = require("../controllers/videogames.controllers");

router.get("/", getVideogames);
// Hemos protegido la ruta con autenticación
router.get("/id/:id", [isAuth], getVideogameByID);
router.get("/genre/:genre", getVideogamesByGenre);
router.get("/console/:consoleId", getVideogamesByConsole);
router.post("/", createVideogame);

module.exports = router;
