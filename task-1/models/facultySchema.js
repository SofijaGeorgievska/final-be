const mongoose = require("mongoose");

const facultySchema = mongoose.Schema({
  name: String,
  address: String,
  // university
});

const FacultyModel = mongoose.model("Faculty", facultySchema, "faculty");

// read
const readFaculties = async () => {
  return await FacultyModel.find();
};

// create
const add = async (data) => {
  const newFaculty = new FacultyModel(data);
  return await newFaculty.save();
};

//update
const update = async (id, data) => {
  return await FacultyModel.updateOne({ _id: id }, data);
};

//delete
const remove = async (id) => {
  return await FacultyModel.deleteOne({ _id: id });
};

module.exports = {
  readFaculties,
  add,
  update,
  remove,
};