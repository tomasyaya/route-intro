const { Router } = require("express");
const {
  createUser,
  showUserForm,
  addBook,
} = require("../controllers/user.controllers");

const router = Router();

router
  .get("/", showUserForm)
  .post("/", createUser)
  .post("/books/:bookId", addBook);

module.exports = router;
