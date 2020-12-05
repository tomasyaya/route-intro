const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.create({ username });
    res.send(user);
  } catch (err) {
    console.error(err);
  }
};

const showUserForm = async (req, res) => {
  res.render("user");
};

const addBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const { username } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { username },
      { $push: { books: bookId } },
      { new: true }
    );
    res.send(updatedUser);
  } catch (err) {
    console.error(err);
  }
};

const getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username }).populate(
      "books",
      "title description"
    );
    res.send(user);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { createUser, showUserForm, addBook, getUser };
