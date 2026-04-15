const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    publicId: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: false, trim: true },
  images: [imageSchema],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
