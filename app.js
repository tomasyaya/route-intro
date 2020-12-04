require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/connectDb");
const booksRoutes = require("./routes/books.route");
const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
const { withAuth, anonRoute } = require("./middlewares");

connectDb();

hbs.registerPartials(`${__dirname}/views/partials/`);

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log("cookie", req.cookies);
  next();
});

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);
app.set(express.static(`${__dirname}/public`));

app.get("/", anonRoute, (req, res) => res.render("index"));
app.use("/auth", anonRoute, authRoutes);
app.use(withAuth);
app.get("/private", (req, res) => res.render("private"));
app.use("/books", booksRoutes);
app.use("/user", userRoutes);

app.listen(process.env.PORT, () => console.log("server running on port 4000"));
