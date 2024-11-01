const mongoose = require("mongoose");

const uri =
  "mongodb+srv://S0ph13:P0rtokal@cluster0.3w1b5ct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;