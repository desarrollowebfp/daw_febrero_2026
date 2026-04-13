const cloudinary = require("../config/cloudinary");

const deleteImgCloudinary = async (publicId) => {
  if (!publicId) {
    return;
  }

  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.log("Error borrando imagen", error.message);
  }
};

module.exports = deleteImgCloudinary;
