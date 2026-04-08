const express = require("express");
const router = express.Router();

const {
  getAllConsoles,
  getConsoleByID,
  getConsolesByBrand,
  getConsolesByType,
  getConsolesAfterYear,
  createConsole,
  deleteConsole,
  updateConsole,
} = require("../controllers/consoles.controllers");

router.get("/", getAllConsoles);
router.get("/id/:id", getConsoleByID);
router.get("/brand/:brand", getConsolesByBrand);
router.get("/type/:type", getConsolesByType);
router.get("/year/:year", getConsolesAfterYear);
router.post("/", createConsole);
router.delete("/:id", deleteConsole);
router.put("/:id", updateConsole);

module.exports = router;
