const User = require("../models/User");

const signupConfig = {
  title: "signup",
  authPath: "/auth/signup",
  btnText: "Signup",
};

const loginConfig = {
  title: "login",
  authPath: "/auth/login",
  btnText: "Login",
};

const authLogin = (req, res) => {
  res.render("auth", loginConfig);
};

const authSignup = (req, res) => {
  res.render("auth", signupConfig);
};

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hasMissingCredential = !email || !password;
    if (hasMissingCredential) {
      return res.render("auth", {
        ...signupConfig,
        error: "email and password are required",
      });
    }
    const isUser = await User.findOne({ email });
    if (isUser) {
      return res.render("auth", {
        ...signupConfig,
        error: "user already exist",
      });
    }
    const user = await User.create({ email, password });

    res.cookie("user", user._id, { httpOnly: true });
    res.redirect("/private");
  } catch (err) {
    console.error(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hasMissingCredential = !email || !password;
    if (hasMissingCredential) {
      return res.render("auth", {
        ...loginConfig,
        error: "email and password are required",
      });
    }
    const user = await User.findOne({ email });

    if (!user) {
      return res.render("auth", {
        ...loginConfig,
        error: "invalid credentials",
      });
    }
    const hasCorrectCredentials = password === user.password;
    if (!hasCorrectCredentials) {
      return res.render("auth", {
        ...loginConfig,
        error: "invalid credentials",
      });
    }
    res.cookie("user", user._id, { httpOnly: true });
    res.redirect("/private");
  } catch (err) {
    console.error(err);
  }
};

const logout = (req, res) => {
  res.clearCookie("user");
  res.redirect("/");
};

module.exports = {
  signup,
  login,
  authLogin,
  authSignup,
  logout,
};
