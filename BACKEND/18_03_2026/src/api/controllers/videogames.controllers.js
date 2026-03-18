const Videogame = require("../models/videogame.model");
const createError = require("../../utils/createError");

//GET ALL VIDEOGAMES
const getVideogames = async (req, res, next) => {
  try {
    const videogames = await Videogame.find();
    return res.status(200).json(videogames);
  } catch (error) {
    return next(error);
  }
};

//GET VIDEOGAME BY ID
const getVideogameByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const videogame = await Videogame.findById(id);

    if (!videogame) {
      return next(createError("Videogame not found", 404));
    }
  } catch (error) {
    return next(error);
  }
};

//GET VIDEOGAME BY GENRE
const getVideogamesByGenre = async (req, res, next) => {
  try {
    const { genre } = req.params;
    const videogames = await Videogame.find({ genre });
    return res.status(200).json(videogames);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getVideogames, getVideogameByID, getVideogamesByGenre };
