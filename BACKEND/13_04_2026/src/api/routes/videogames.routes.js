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
  deleteVideogame,
  updateVideogame,
} = require("../controllers/videogames.controllers");

router.get("/", getVideogames);
// Hemos protegido la ruta con autenticación
router.get("/id/:id", [isAuth], getVideogameByID);
router.get("/genre/:genre", getVideogamesByGenre);
router.get("/console/:consoleId", getVideogamesByConsole);
router.post("/", upload.single("cover"), createVideogame);
router.delete("/:id", deleteVideogame);
router.put("/:id", upload.single("cover"), updateVideogame);

module.exports = router;
