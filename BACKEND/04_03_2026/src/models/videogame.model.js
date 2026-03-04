const mongoose = require("mongoose");

const GENRES = [
  "Action",
  "Adventure",
  "RPG",
  "Shooter",
  "Strategy",
  "Simulation",
  "Sports",
  "Racings",
  "Indie",
  "Puzzle",
  "Horror",
  "Other",
];

const PLATFORMS = [
  "PC",
  "PS5",
  "PS4",
  "XboxSeries",
  "XboxOne",
  "Switch",
  "Mobile",
];

const PEGI = [3, 7, 12, 16, 18];

const videogameSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    studio: {
      type: String,
      required: false,
      trim: true,
      default: "Unknown Studio",
    },
    releaseYear: { type: Number, min: 1970, max: 2100 },
    genre: { type: String, enum: GENRES, default: "Other" },
    platforms: { type: [String], required: true, enum: PLATFORMS },
    rating: { type: Number, min: 0, max: 10, default: 0 },
    isDigital: { type: Boolean, default: true },
    inStock: { type: Number, min: 0, default: 0 },
    cover: {
      type: String,
      trim: true,
      default:
        "https://res.cloudinary.com/dwkafwila/image/upload/v1772654099/400x600_lwcdfb.png",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Videogame = mongoose.model("Videogame", videogameSchema);
module.exports = Videogame;
