const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  books: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Book",
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
