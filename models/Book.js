const mongoose = require("mongoose")

const BookSchema = new mongoose.Schema({
    title: String,
    description: String,
    rating: Number,
    author: String
})

module.exports = mongoose.model("Book", BookSchema)