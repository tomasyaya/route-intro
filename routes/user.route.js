const { Router } = require("express");
const {
  createUser,
  showUserForm,
  addBook,
  getUser,
} = require("../controllers/user.controllers");

const router = Router();

router
  .get("/", showUserForm)
  .get("/:username", getUser)
  .post("/", createUser)
  .post("/books/:bookId", addBook);

module.exports = router;
