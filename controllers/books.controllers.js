const Book = require("../models/Book");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.render("books", { books });
  } catch (err) {
    res.send(err);
  }
};

const getBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findById(bookId);
    console.log(book);
    res.render("book-detail", book);
  } catch (err) {
    console.log(err);
  }
};

const createBook = async (req, res) => {
  try {
    await Book.create(req.body);
    const books = await Book.find();
    res.render("books", { books });
  } catch (err) {
    console.log(err);
  }
};

const updateBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {
      new: true,
    });
    console.log(updatedBook);
    res.render("book-detail", updatedBook);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
};
