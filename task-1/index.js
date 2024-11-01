const express = require("express");
const connectDB = require("./db/config")

connectDB()

const { getFaculties, addFaculty, updateFaculty, removeFaculty } = require("./handlers/faculty")
const { getUniversities, addUniversity, updateUniversity, removeUniversity } = require("./handlers/university")

const app = express()
app.use(express.json());

// Faculties routes
app.get("/faculties", getFaculties);
app.post("/faculties", addFaculty);
app.put("/faculties/:id", updateFaculty);
app.delete("/faculties/:id", removeFaculty);

// Universities routes
app.get("/universities", getUniversities);
app.post("/universities", addUniversity);
app.put("/universities/:id", updateUniversity);
app.delete("/universities/:id", removeUniversity);


app.listen(8000, () => console.log("Server started at port 8000!"));