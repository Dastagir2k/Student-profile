


import React, { useEffect, useState } from "react";
import profile from "./profile.jpg";
import {
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import "../App.css";
import { PiStudentFill } from "react-icons/pi";
import { MdEmail, MdFileDownload } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineIdentification } from "react-icons/hi";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";
import axios from "axios";

const Profile = () => {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/details");
        setServerData(result.data);
        console.log(serverData[0]);
        
      } catch (err) {
        console.log("error from server", err);
      }
    };

    fetchData();
  }, []);

  if (!serverData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen colors px-4 py-5 bgte">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Column */}
        <div className="md:w-1/3 text-white rounded-3xl p-4 bg-orange-500">
          {/* Image, Name, and Role */}
          <div className="flex flex-col items-center py-5 gap-2">
            <img src={profile}  className="w-1/2 rounded-3xl items-center" />
            <h2 className="text-3xl font-medium">{serverData[0].name}</h2>
            <h2 className="text-xl">{serverData[0].role}</h2>
          </div>

          {/* About Me */}
          <div className="px-4 py-2 text-l font-serif">
            {/* <p>{serverData[0].aboutMe}</p> */}
            <p>I'm an Aspiring Fullstack Developer . I build websites with great UI/UX and optimization performance</p>
          </div>

          {/* Personal Information */}
          <div className="px-4 py-4">
            <h2 className="text-3xl py-2">Personal Information</h2>
            <div className="grid grid-cols-2">
              <div className="flex flex-row gap-2">
                <PiStudentFill size={30} className="mt-2" />
                <div className="py-2">{serverData[0].graduationYear}</div>
              </div>
              <div className="flex flex-row gap-2">
                <FaGraduationCap size={30} className="mt-2" />
                <div className="py-2">{serverData[0].department}</div>
              </div>
              <div className="flex flex-row gap-2">
                <MdEmail size={20} />
                <div className="py-1">{serverData[0].email}</div>
              </div>
              <div className="flex flex-row gap-2">
                <CgProfile size={30} className="mt-2" />
                <div className="py-2">{serverData[0].gender}</div>
              </div>
              <div className="flex flex-row gap-2">
                <FaPhoneAlt size={20} className="mt-2" />
                <div className="py-2">6369782995</div>
              </div>
              <div className="flex flex-row gap-2">
                <HiOutlineIdentification size={30} className="mt-2" />
                <div className="py-2">{serverData[0].regno}</div>
              </div>
            </div>

            <div className="bg-white text-black border-4 px-5 py-1  mt-2 flex items-center justify-center rounded-md cursor-pointer">
              <a href={serverData[0].resumeLink} className="flex">
                <MdFileDownload size={30} /> Resume
              </a>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="md:w-1/3 flex flex-col gap-2">
          <div className="rounded-3xl p-2" style={{ backgroundColor: "#FFF0EA" }}>
            <h2 className="text-3xl text-center py-4 underline">Experience</h2>
            {serverData[0].experience.map((exp, index) => (
              <div key={index}>
                <div className="flex flex-row gap-3">
                  <h1 className="text-xl font-mono">{exp.role} |</h1>
                  <h2>{exp.company}</h2>
                </div>
                <div className="px-4">
                  <ul className="list-disc">
                    <li>{exp.description}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl p-4" style={{ backgroundColor: "#FFF0EA" }}>
            <h2 className="text-3xl text-center py-4 underline">Projects</h2>
            {serverData[0].projects.map((project, index) => (
              <div key={index}>
                <div className="flex flex-row gap-3">
                  <h1 className="text-xl font-mono">{project.projectName} |</h1>
                  <a href={project.link} className="cursor-pointer font-bold px-2 py-1 rounded-xl text-red-600">View project</a>
                </div>
                <div className="px-4">
                  <ul className="list-disc">
                    <li>{project.projectDescription}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/3 flex flex-col gap-2">
          <div className="rounded-3xl p-4" style={{ backgroundColor: "#FFF0EA" }}>
            <h2 className="text-3xl text-center py-1 underline">Skills</h2>
            <div className="text-lg md:text-2xl font-sans grid grid-cols-1 md:grid-cols-3 gap-4">
              {serverData[0].skills.map((skill, index) => (
                <div key={index}>
                  <h3>{skill.name}</h3>
                  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-5">
                    <div
                      className="bg-red-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full h-5"
                      style={{ width: skill.percentage }}
                    >
                      {skill.percentage}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-2" style={{ backgroundColor: "#FFF0EA" }}>
            <h2 className="text-3xl text-center py-1 underline">Certification</h2>
            {serverData[0].certifications.map((cert, index) => (
              <div key={index}>
                <h1 className="text-xl font-mono">{cert.certificateName}</h1>
                <p>{cert.provider}</p>
                <div className="px-4">
                  <ul className="list-disc">
                    <li>{cert.certificateDescription}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl py-1" style={{ backgroundColor: "#FFF0EA" }}>
            <h2 className="text-3xl text-center py-1 underline">Achievements</h2>
            <div className="px-6">
              {/* <ul className="list-disc px-4">
                {serverData[0].achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul> */}
              <ul>
                <li>Participated in National Level hackathon and got selected amoung top 50 teams in India . </li>
                <li>Top contest rating in Leetcode on  top 2000 over 50000 members  </li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl p-1" style={{ backgroundColor: "#FFF0EA" }}>
            <h2 className="text-3xl text-center py-1 underline">Social Platforms</h2>
            <div className="grid grid-cols-3 gap-3 px-5">
              {serverData[0].socialPlatforms.map((platform, index) => (
                <div
                  key={index}
                  className="border-red-500 hover:bg-red-500 hover:text-white border-4 px-2 py-1 flex items-center justify-center rounded-md cursor-pointer"
                >
                  <a href={platform.url}>
                    {platform.platform === "GitHub" && <FaGithub size={20} />}
                    {platform.platform === "LinkedIn" && <FaLinkedin size={20} />}
                    {platform.platform === "LeetCode" && <SiLeetcode size={20} />}
                    {platform.platform === "Codeforces" && <SiCodeforces size={20} />}
                    {platform.platform === "CodeChef" && <SiCodechef size={20} />}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;






























