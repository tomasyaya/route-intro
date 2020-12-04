const User = require("../models/User");

const addBook = async (req, res) => {
  try {
    const { user } = req.cookies;
    const { bookId } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      user,
      {
        $push: { books: bookId },
      },
      { new: true }
    );
    res.send({ message: "book added to user", updatedUser });
  } catch (err) {
    console.error(err);
  }
};

const userInfo = async (req, res) => {
  try {
    const { user: userId } = req.cookies;
    const user = await User.findOne({ _id: userId }).populate("books");
    if (!user) {
      return res.render("error", { error: "no user" });
    }
    console.log("user", user);
    res.render("user-info", user);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { addBook, userInfo };
