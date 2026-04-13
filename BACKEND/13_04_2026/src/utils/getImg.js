const cloudinary = require("../config/cloudinary");

const getImgUrl = (publicId) => {
  if (!publicId) {
    return null;
  }

  return cloudinary.url(publicId, {
    secure: true,
  });
};

module.exports = getImgUrl;
