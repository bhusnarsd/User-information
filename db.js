const mongoose = require("mongoose");

// mongodb:/localhost:27017/my_first_database

mongoose.connect("mongodb://localhost:27017/my_first_database");

module.exports = mongoose;
