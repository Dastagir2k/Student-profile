


import React, { useState } from "react";
import axios from "axios"; // Import axios for API calls

const App = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [experienceCount, setExperienceCount] = useState(1);
  const [projectCount, setProjectCount] = useState(1);
  const [skills, setSkills] = useState([{ name: "", percentage: 0 }]);
  const [certificates, setCertificates] = useState([{ certificateName: "", certificateDescription: "" }]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneno: "",
    batch: "",
    registrationNumber: "",
    department: "",
    role: "",
    gender: "",
    experiences: [],
    projects: [],
    socialLinks: {
      linkedIn: "",
      gitHub: "",
    },
  });

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add experience input field
  const addExperience = () => {
    if (experienceCount < 2) {
      setExperienceCount(experienceCount + 1);
    }
  };

  // Add project input field
  const addProject = () => {
    if (projectCount < 4) {
      setProjectCount(projectCount + 1);
    }
  };

  // Add more skills
  const handleAddSkill = () => {
    setSkills([...skills, { name: "", percentage: 0 }]);
  };

  // Add more certificates
  const handleAddCertificate = () => {
    setCertificates([...certificates, { certificateName: "", certificateDescription: "" }]);
  };

  // Handle profile picture upload and convert to base64
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setProfilePic(base64); // Set the base64 image in the state
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = [...formData.experiences];
    newExperiences[index] = { ...newExperiences[index], [name]: value };
    setFormData({ ...formData, experiences: newExperiences });
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const newProjects = [...formData.projects];
    newProjects[index] = { ...newProjects[index], [name]: value };
    setFormData({ ...formData, projects: newProjects });
  };

  // Handle form submission to API
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the full data object to send to the API
    const fullData = {
      ...formData,
      profilePic, // Include base64 profile picture
      skills, // Include skills array
      certificates, // Include certificates array
    };

    try {
      console.log(fullData);

      // Send data via POST request to the backend API
      const response = await axios.post("http://localhost:3000/student", fullData); // Replace with your API endpoint
      console.log("Data successfully sent:", response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-200 shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Profile Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Profile Picture */}
        <div className="mb-4">
          <label className="block text-gray-700">Profile Picture</label>
          <input
            type="file"
            onChange={handleFileUpload}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Personal Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone no </label>
            <input
              type="text"
              name="phoneno"
              value={formData.phoneno}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter registration number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter department"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter role"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Experience Section */}
        {[...Array(experienceCount)].map((_, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Title/Role</label>
            <input
              type="text"
              name="role"
              value={formData.experiences[index]?.role || ""}
              onChange={(e) => handleExperienceChange(index, e)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter title/role"
            />
            <label className="block text-gray-700 mt-2">Description</label>
            <textarea
              name="description"
              value={formData.experiences[index]?.description || ""}
              onChange={(e) => handleExperienceChange(index, e)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter description"
            />
          </div>
        ))}

        {experienceCount < 2 && (
          <button
            type="button"
            onClick={addExperience}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add More Experience
          </button>
        )}

        {/* Projects Section */}
        {[...Array(projectCount)].map((_, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700">Project Name</label>
            <input
              type="text"
              name="projectName"
              value={formData.projects[index]?.projectName || ""}
              onChange={(e) => handleProjectChange(index, e)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter project name"
            />
            <label className="block text-gray-700 mt-2">Project Description</label>
            <textarea
              name="projectDescription"
              value={formData.projects[index]?.projectDescription || ""}
              onChange={(e) => handleProjectChange(index, e)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter project description"
            />
          </div>
        ))}

        {projectCount < 4 && (
          <button
            type="button"
            onClick={addProject}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Add More Project
          </button>
        )}

        {/* Skills Section */}
        <h3 className="text-xl font-bold mb-4">Skills</h3>
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              value={skill.name}
              onChange={(e) => {
                const newSkills = [...skills];
                newSkills[index].name = e.target.value;
                setSkills(newSkills);
              }}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter skill"
            />
            <input
              type="number"
              value={skill.percentage}
              onChange={(e) => {
                const newSkills = [...skills];
                newSkills[index].percentage = e.target.value;
                setSkills(newSkills);
              }}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter skill percentage"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddSkill}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add More Skills
        </button>

        {/* Certificates Section */}
        <h3 className="text-xl font-bold mb-4">Certificates</h3>
        {certificates.map((certificate, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              value={certificate.certificateName}
              onChange={(e) => {
                const newCertificates = [...certificates];
                newCertificates[index].certificateName = e.target.value;
                setCertificates(newCertificates);
              }}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter certificate name"
            />
            <textarea
              value={certificate.certificateDescription}
              onChange={(e) => {
                const newCertificates = [...certificates];
                newCertificates[index].certificateDescription = e.target.value;
                setCertificates(newCertificates);
              }}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter certificate description"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddCertificate}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add More Certificates
        </button>

        {/* Social Links */}
        <div className="mb-4">
          <label className="block text-gray-700">LinkedIn</label>
          <input
            type="text"
            name="linkedIn"
            value={formData.socialLinks.linkedIn}
            onChange={(e) =>
              setFormData({
                ...formData,
                socialLinks: { ...formData.socialLinks, linkedIn: e.target.value },
              })
            }
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            placeholder="Enter LinkedIn URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">GitHub</label>
          <input
            type="text"
            name="gitHub"
            value={formData.socialLinks.gitHub}
            onChange={(e) =>
              setFormData({
                ...formData,
                socialLinks: { ...formData.socialLinks, gitHub: e.target.value },
              })
            }
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            placeholder="Enter GitHub URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Leetcode</label>
          <input
            type="text"
            name="gitHub"
            value={formData.socialLinks.gitHub}
            onChange={(e) =>
              setFormData({
                ...formData,
                socialLinks: { ...formData.socialLinks, gitHub: e.target.value },
              })
            }
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            placeholder="Enter GitHub URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Portfolio</label>
          <input
            type="text"
            name="gitHub"
            value={formData.socialLinks.gitHub}
            onChange={(e) =>
              setFormData({
                ...formData,
                socialLinks: { ...formData.socialLinks, gitHub: e.target.value },
              })
            }
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            placeholder="Enter GitHub URL"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;

// Helper function to convert image to base64
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}