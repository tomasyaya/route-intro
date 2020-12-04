exports.withAuth = (req, res, next) => {
  const { user } = req.cookies;
  console.log("user", user);
  if (!user) {
    return res.redirect("/");
  }
  next();
};

exports.anonRoute = (req, res, next) => {
  const { user } = req.cookies;
  if (user) {
    return res.redirect("/private");
  }
  next();
};
