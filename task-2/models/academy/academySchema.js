const mongoose = require("mongoose");

const academySchema = new mongoose.Schema({
  name: String,
  numberOfModules: Number,
  //modules: 
});

module.exports = mongoose.model("Academy", academySchema, "academy");