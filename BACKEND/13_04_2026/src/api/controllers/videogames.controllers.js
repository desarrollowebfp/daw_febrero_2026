const Videogame = require("../models/videogame.model");
const createError = require("../../utils/createError");
const deleteImgCloudinary = require("../../utils/deleteImage");
const getImgUrl = require("../../utils/getImg");

//Formateamos los videojuegos
const formatVideogame = (videogame) => {
  if (!videogame) {
    return null;
  }
  const videogameObject = videogame.toObject
    ? videogame.toObject()
    : { ...videogame };
  return {
    ...videogameObject,
    cover: videogameObject.cover ? getImgUrl(videogameObject.cover) : null,
  };
};

//GET ALL VIDEOGAMES
const getVideogames = async (req, res, next) => {
  try {
    const videogames = await Videogame.find().populate("consoles");
    const formattedVideogames = videogames.map(formatVideogame);
    return res.status(200).json(formattedVideogames);
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

    return res.status(200).json(formatVideogame(videogame));
  } catch (error) {
    return next(error);
  }
};

//GET VIDEOGAME BY GENRE
const getVideogamesByGenre = async (req, res, next) => {
  try {
    const { genre } = req.params;
    const videogames = await Videogame.find({ genre }).populate("consoles");
    const formattedVideogames = videogames.map(formatVideogame);
    return res.status(200).json(formattedVideogames);
  } catch (error) {
    return next(error);
  }
};

//GET VIDEOGAMES BY CONSOLE
const getVideogamesByConsole = async (req, res, next) => {
  try {
    const { consoleId } = req.params;

    const videogames = await Videogame.find({ consoles: consoleId }).populate(
      "consoles",
    );
    const formattedVideogames = videogames.map(formatVideogame);
    return res.status(200).json(formattedVideogames);
  } catch (error) {
    return next(error);
  }
};

//CREATE VIDEOGAME
const createVideogame = async (req, res, next) => {
  try {
    const newVideogame = new Videogame(req.body);
    //Aqui comprobamos que estamos subiendo un fichero
    if (req.file) {
      newVideogame.cover = req.file.filename;
    }
    const createdVideogame = await newVideogame.save();
    return res.status(201).json(createdVideogame);
  } catch (error) {
    return next(error);
  }
};

const deleteVideogame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedVideogame = await Videogame.findByIdAndDelete(id);
    if (!deletedVideogame) {
      return next(createError("Videogame not found", 404));
    }
    if (deletedVideogame.cover) {
      await deleteImgCloudinary(deletedVideogame.cover);
    }
    return res.status(200).json("Videojuego borrado correctamente");
  } catch (error) {
    return next(error);
  }
};

const updateVideogame = async (req, res, next) => {
  try {
    const { id } = req.params;
    const previousVideogame = await Videogame.findById(id);
    if (!previousVideogame) {
      return next(createError("Videogame not found", 404));
    }
    const updates = { ...req.body };
    if (req.file) {
      updates.cover = req.file.filename;
    }
    const updatedVideogame = await Videogame.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });
    if (req.file && previousVideogame.cover) {
      await deleteImgCloudinary(previousVideogame.cover);
    }
    return res.status(200).json(updatedVideogame);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getVideogames,
  getVideogameByID,
  getVideogamesByGenre,
  getVideogamesByConsole,
  createVideogame,
  deleteVideogame,
  updateVideogame,
};
