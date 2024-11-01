const mongoose = require("mongoose");

const universitySchema = mongoose.Schema({
  name: String,
  address: String,
  //faculties: {},
});

const UniversityModel = mongoose.model("University", universitySchema, "university");

// get all universities 
const readUniversities  = async () => {
  return await UniversityModel.find();
};

// create university
const add = async (data) => {
  const newUniversity = new UniversityModel(data);
  return await newUniversity.save();
};

const update = async (id, data) => {
  return await UniversityModel.updateOne({ _id: id }, data);
};

const remove = async (id) => {
  return await UniversityModel.deleteOne({ _id: id });
};

module.exports = {
  readUniversities,
  add,
  update,
  remove,
};