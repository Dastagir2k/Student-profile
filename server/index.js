const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const upload = require("./middleware/Upload.js");
const Student = require("./models/Student.model.js");
const util = require("util");
require("dotenv").config()
const app = express();
app.use(express.json());
app.use(cors());



const db_url=process.env.DATABASE_URL;

// MongoDB connection and GridFS setup

async function deleteStudents() {
  try{
    await Student.deleteMany({});
    console.log('All documents deleted!');
  } catch (err) {
    console.error(err);
}
}

// deleteStudents();




app.delete('/students/:regno', async (req, res) => {
    try {
      const result = await Student.deleteOne({ regno: req.params.regno });
      if (result.deletedCount === 0) {
        return res.status(404).send('Student not found');
      }
      res.send('Student deleted successfully');
    } catch (error) {
      res.status(500).send('Error deleting student: ' + error.message);
    }
  });














// Other endpoints
app.post("/student", async (req, res) => {
  try {
    // Log incoming data
    console.log("Incoming Data: ", req.body);

    // Create a new Student document using the form data sent in the request body
    const newStudent = new Student({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phoneno,
      gender: req.body.gender,
      role: req.body.role,
      regno: req.body.registrationNumber,
      graduationYear: req.body.batch,
      department: req.body.department,
      resumeLink: req.body.resumeLink,
      profilePicture: req.body.profilePic,
      aboutMe: req.body.aboutMe,
      projects: req.body.projects || [],  // Ensure defaults if undefined
      experience: req.body.experiences || [],
      skills: req.body.skills || [],
      certifications: req.body.certificates || [],
      achievements: req.body.achievements || [],
      socialPlatforms: req.body.socialLinks ? [
        { platform: "LinkedIn", url: req.body.socialLinks.linkedIn },
        { platform: "GitHub", url: req.body.socialLinks.gitHub }
      ] : []
    });

    // Save the new student record to the database
    const savedStudent = await newStudent.save();
    console.log("Student saved: ", savedStudent);
    
    res.status(201).json(savedStudent); // Respond with the saved student data
  } catch (error) {
    console.error("Error saving student data:", error);
    res.status(500).json({ message: "Error saving student data", error });
  }
});




app.get("/details", async (req, res) => {
  try {
    const students = await Student.find({});
    console.log('data displyedd');
    res.status(200).json(students);
  } catch (err) {
    console.log("Error on retrieving data ->", err);
  }
});

app.get("/", (req, res) => {
  res.status(200).send("Working!!");
});

// Connect to MongoDB and start server
mongoose.connect(db_url)
  .then(() => {
    console.log("Database connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Connection failed -> ", err);
  });
