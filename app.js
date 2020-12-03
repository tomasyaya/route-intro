require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const hbs = require("hbs");
const connectDb = require("./config/connectDb");
const booksRoutes = require("./routes/books.route");

connectDb();

hbs.registerPartials(`${__dirname}/views/partials/`);

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);
app.set(express.static(`${__dirname}/public`));

app.use("/books", booksRoutes);

app.listen(process.env.PORT, () => console.log("server running on port 4000"));
