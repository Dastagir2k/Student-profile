// const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   gender: String,
//   role:String,
//   regno: Number,
//   graduationYear: Number,
//   department: String,
//   resumeLink: String,
//   profilePicture: String,
//   aboutMe: String,

//   // Embedding project details directly
//   projects: [{
//     title: String,
//     description: String,
//     link: String
//   }],

//   // Embedding experience details directly
//   experience: [{
//     role: String,
//     company: String,
//     description: String,
//     startdate: Date,
//     enddate: Date
//   }],

//   // Embedding skills directly
//   skills: [{
//     name: String,
//     proficiency: String
//   }],

//   // Embedding certifications directly
//   certifications: [{
//     title: String,
//     provider: String,
//     description: String
//   }],

//   // Achievements as an array of strings
//   achievements: [String],

//   // Embedding social platforms directly
//   socialPlatforms: [{
//     platform: String,
//     url: String
//   }]
// });

// const Student = mongoose.model("Student", studentSchema);

// module.exports = Student;



const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  gender: String,
  role: String,
  regno: String,
  graduationYear: String,
  department: String,
  resumeLink: String,
  profilePicture: String,
  aboutMe: String,
  projects: [{ projectName: String, projectDescription: String }],
  experience: [{ role: String, description: String }],
  skills: [{ name: String, percentage: Number }],
  certifications: [{ certificateName: String, certificateDescription: String }],
  achievements: [String], // Adjust based on your data
  socialPlatforms: [{ platform: String, url: String }]
});

module.exports = mongoose.model('Student', studentSchema);
