const { Router } = require("express");
const router = Router();
const {
  getBook,
  getBooks,
  updateBook,
  createBook,
  deleteBook,
} = require("../controllers/books.controllers");

router
  .get("/", getBooks)
  .get("/:bookId", getBook)
  .post("/", createBook)
  .post("/:bookId/delete", deleteBook)
  .post("/:bookId/update", updateBook);

module.exports = router;
