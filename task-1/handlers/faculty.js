const { readFaculties, add, update, remove } = require("../models/facultySchema");


const getFaculties = async (req, res) => {
  try {
    const faculties = await readFaculties();
    return res.status(200).send(faculties);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

//create
const addFaculty = async (req, res) => {
  try {
    await add(req.body);
    return res.status(200).send("New faculty has been created.");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

//update
const updateFaculty = async (req, res) => {
  try {
    await update(req.params.id, req.body);
    return res.status(200).send("Faculty has been updated successfully.");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

//delete
const removeFaculty = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(200).send("Faculty has been deleted successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
 getFaculties,
 addFaculty,
 updateFaculty,
 removeFaculty
};