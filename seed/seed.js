require("dotenv").config()
const mongoose = require("mongoose")
const data = require("./data")
const Book = require("../models/Book")

const dbOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

async function seedDb(){
    try {
        await mongoose.connect(process.env.MONGODB_URL, dbOptions)
        const books = await Book.create(data)
        console.log(books)
        mongoose.connection.close()
    }catch(err){
        console.error(err)
    }
}

seedDb()