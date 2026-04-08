const express = require("express");
const router = express.Router();
const isAuth = require("../../middlewares/auth.middleware");
const upload = require("../../middlewares/upload");

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
router.post("/", upload.single("cover"), createVideogame);

module.exports = router;
