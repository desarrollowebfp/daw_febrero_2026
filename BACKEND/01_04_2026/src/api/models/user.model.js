const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, trim: true, required: true, unique: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: [
        8,
        "La contraseña tiene que tener un mínimo de 8 caracteres de longitud",
      ],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.pre("save", function () {
  this.password = bcrypt.hashSync(this.password, 10);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
