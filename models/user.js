const mongoose = require("mongoose");
// const { stringify } = require("querystring");

// creat format schema (format) for database;


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobNumber: Number,
    password: String
  
     
}) ;

module.exports = mongoose.model("userss", userSchema);