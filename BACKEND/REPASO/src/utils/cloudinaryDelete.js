const cloudinary = require("../config/cloudinary");

const deleteImages = async (images = []) => {
  if (!images.length) {
    return;
  }
  await Promise.all(
    images.map((image) => cloudinary.uploader.destroy(image.publicId)),
  );
};

module.exports = deleteImages;
