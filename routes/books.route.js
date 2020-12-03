const { Router } = require("express");
const router = Router();
const {
  getBook,
  getBooks,
  updateBook,
  createBook,
} = require("../controllers/books.controllers");

router
  .get("/", getBooks)
  .get("/:bookId", getBook)
  .post("/", createBook)
  .post("/:bookId", updateBook);

module.exports = router;
