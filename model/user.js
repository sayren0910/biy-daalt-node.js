const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = Schema({
  UserName: {
    type: String,
    required: [true, " хэрэглэгчин нэрийг оруулна уу"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/[^\s@]+@[^\s@]+\.[^\s@]+/gi, "э-мэйл буруу байна"],
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    enum:["user","admin"],
    default:"user",
  },
  wishlist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
});

User.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
User.methods.CheckPassword = async function (password) {
  const check = await bcrypt.compare(password, this.password);
  return check;
};



module.exports = mongoose.model("user", User);