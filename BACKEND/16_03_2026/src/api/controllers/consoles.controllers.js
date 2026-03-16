const Console = require("../models/console.model");
const { createError } = require("../../utils");

//GET ALL CONSOLES
const getAllConsoles = async (req, res, next) => {
  try {
    const consoles = await Console.find();
    return res.status(200).json(consoles);
  } catch (error) {
    return next(error);
  }
};

//GET CONSOLE BY ID
const getConsoleByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const console = await Console.findById(id);

    if (!console) {
      return next(createError("Console not found", 404));
    }

    return res.status(200).json(console);
  } catch (error) {
    return next(error);
  }
};

//CREATE CONSOLE
const createConsole = async (req, res, next) => {
  try {
    const newConsole = new Console(req.body);
    const createdConsole = await newConsole.save();
    return res.status(201).json(createdConsole);
  } catch (error) {
    return next(error);
  }
};

//DELETE CONSOLE
const deleteConsole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedConsole = await Console.findByIdAndDelete(id);
    if (!deletedConsole) {
      return next(createError("Console not found", 404));
    }

    return res.status(200).json(deletedConsole);
  } catch (error) {
    return next(error);
  }
};

//UPDATE CONSOLE
const updateConsole = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedConsole = await Console.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedConsole) {
      return next(createError("Console not found", 404));
    }

    return res.status(200).json(updatedConsole);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllConsoles,
  getConsoleByID,
  createConsole,
  deleteConsole,
  updateConsole,
};
