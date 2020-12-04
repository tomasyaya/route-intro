const { Router } = require("express");
const { addBook, userInfo } = require("../controllers/user.controllers");
const router = Router();

router.post("/books", addBook).get("/", userInfo);

module.exports = router;
