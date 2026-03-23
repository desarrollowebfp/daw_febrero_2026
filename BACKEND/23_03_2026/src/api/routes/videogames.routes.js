const express = require("express");
const router = express.Router();

const {
  getVideogames,
  getVideogameByID,
  getVideogamesByGenre,
  getVideogamesByConsole,
  createVideogame,
} = require("../controllers/videogames.controllers");

router.get("/", getVideogames);
router.get("/id/:id", getVideogameByID);
router.get("/genre/:genre", getVideogamesByGenre);
router.get("/console/:consoleId", getVideogamesByConsole);
router.post("/", createVideogame);

module.exports = router;
