const { Router } = require("express");
const router = Router();
const {
  login,
  signup,
  authLogin,
  authSignup,
  logout,
} = require("../controllers/auth.controllers");

router
  .get("/signup", authSignup)
  .get("/login", authLogin)
  .post("/signup", signup)
  .post("/login", login)
  .post("/logout", logout);

module.exports = router;
