const mongoose = require("mongoose");

//Definimos unos enums para no ponerlos directamente dentro del esquema y mejorar la legibilidad
const BRANDS = ["Sony", "Microsoft", "Nintendo", "Valve", "Other"];

const CONSOLE_TYPES = ["Home", "Portable", "Hybrid"];

const MEDIA_FORMATS = ["Digital", "Disc", "Cartridge", "Mixed"];

//Definimos el esquema de la consola y le activamos los timestamps y le desactivamos la clave de versión
const consoleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    brand: { type: String, required: true, enum: BRANDS },
    releaseYear: { type: Number, min: 1990, max: 2100 },
    type: { type: String, enum: CONSOLE_TYPES, default: "Home" },
    mediaFormat: { type: String, enum: MEDIA_FORMATS, default: "Mixed" },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dwkafwila/image/upload/v1773258385/png_wyhv3s.png",
    },
    storageGB: { type: Number, min: 0, default: 500 },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Console = mongoose.model("Console", consoleSchema);

module.exports = Console;
