const Videogame = require("../models/videogame.model");
const createError = require("../../utils/createError");

//GET ALL VIDEOGAMES
const getVideogames = async (req, res, next) => {
  try {
    const videogames = await Videogame.find().populate("consoles");
    return res.status(200).json(videogames);
  } catch (error) {
    return next(error);
  }
};

//GET VIDEOGAME BY ID
const getVideogameByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const videogame = await Videogame.findById(id).populate("consoles");

    if (!videogame) {
      return next(createError("Videogame not found", 404));
    }

    return res.status(200).json(videogame)
  } catch (error) {
    return next(error);
  }
};

//GET VIDEOGAME BY GENRE
const getVideogamesByGenre = async (req, res, next) => {
  try {
    const { genre } = req.params;
    const videogames = await Videogame.find({ genre }).populate("consoles");
    return res.status(200).json(videogames);
  } catch (error) {
    return next(error);
  }
};

//GET VIDEOGAMES BY CONSOLE
const getVideogamesByConsole = async (req, res, next) => {
  try {
    const { consoleId } = req.params;

    const videogames = await Videogame.find({ consoles: consoleId }).populate("consoles");

    return res.status(200).json(videogames);
  } catch (error) {
    return next(error);
  }
};

//CREATE VIDEOGAME
const createVideogame = async (req, res, next) => {
  try {
    const newVideogame = new Videogame(req.body);

    const createdVideogame = await newVideogame.save();

    return res.status(201).json(createdVideogame);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getVideogames,
  getVideogameByID,
  getVideogamesByGenre,
  getVideogamesByConsole,
  createVideogame
};
