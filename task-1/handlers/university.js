const { readUniversities, add, update, remove } = require("../models/universitySchema");


const getUniversities = async (req, res) => {
  try {
    const universities = await readUniversities();
    return res.status(200).send(universities);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

//create
const addUniversity = async (req, res) => {
  try {
    await add(req.body);
    return res.status(200).send("New university has been created.");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

//update
const updateUniversity = async (req, res) => {
  try {
    await update(req.params.id, req.body);
    return res.status(200).send("University has been updated successfully.");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

//delete
const removeUniversity = async (req, res) => {
  try {
    await remove(req.params.id);
    return res.status(200).send("University has been deleted successfully");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getUniversities, 
  addUniversity, 
  updateUniversity,
  removeUniversity
};