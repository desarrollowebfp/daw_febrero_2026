const generalErrors = (error, req, res) => {
  return res.status(error.status || 500).json({
    message: error.message || "Error interno del servidor",
  });
};

module.exports = generalErrors;
