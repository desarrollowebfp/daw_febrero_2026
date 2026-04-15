const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const formatFileName = (fileName) => {
  const nombreSinExtension = fileName.split(".").slice(0, -1).join(".");

  const nombreMinusculas = nombreSinExtension.toLowerCase();

  const nombreLimpio = nombreMinusculas.replace(/[^a-z0-9]/g, "-");

  return nombreLimpio;
};

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    const uniqueFilename = `${Date.now()}-${formatFileName(file.originalname)}`;

    return {
      folder: "multiple",
      allowed_formats: ["jpg", "jpeg", "png", "webp"],
      public_id: uniqueFilename,
    };
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

module.exports = upload;
