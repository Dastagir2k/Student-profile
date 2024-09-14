import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import {students} from "../Data/Students"
const StudentPage = () => {




  
  const [users, setuser] = useState(students.slice(0, students.length));
  const [search,setSearch]=useState("");
  const [courseselected,setCourseSelected]=useState("");
  const [yearselected,setYearSelected]=useState("");
  const [pagenumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const PageVisited = pagenumber * usersPerPage;
      
  const courses=[
        {name:"CSE"},
        {name:"IT"},
        {name:"ECE"},
        {name:"MECH"},
        {name:"CIVIL"},  
      ]
  // this function filter the users based on search input
  const filteredUsers=users.filter(
    (user)=>{
      const searchMatch = user.name.toLowerCase().includes(search.toLowerCase()) || 
                        user.id.toLowerCase().includes(search.toLowerCase());
    
    const courseMatch = courseselected ? user.department === courseselected : true;
    const yearMatch = yearselected ? user.batch === yearselected : true;
    return searchMatch && courseMatch && yearMatch;
    }  
  );

  // this will display the filtered users
  const displayUsers = filteredUsers
    .slice(PageVisited, PageVisited + usersPerPage)
    .map((user, index) => {
      return (
        <div key={index} className="px-10 py-5 text-3xl bg-white rounded-xl">
          <h2>{user.name}</h2>
          <h2 className="text-xl font-bold">{user.id}</h2>
          <button className="bg-blue-500 px-2 text-xl text-white">
            <a href="/profile">Profile</a>
          </button>
        </div>
      );
    });
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <h2 className="text-center text-2xl">Students Page</h2>
      <div className="px-20 mb-5 mt-5 mr-4">
        <input
          className="w-4/5 py-2 px-4 bg-slate-50 rounded-2xl text-black"
          placeholder="Search Student Reg no ....."
          onChange={(e)=>
            {
              setSearch(e.target.value);
              setPageNumber(0);
            }}
        />
       
        <select className="ml-5 min-w-10 py-2"
        onChange={(e)=>{
          setCourseSelected(e.target.value);
          setPageNumber(0);
        }}>
          {courses.map((course,index)=>(
            <option key={index}>{course.name}</option>

          ))}
        </select>
        <select className="ml-5 min-w-10 py-2 "
        onChange={(e)=>{
          setYearSelected(e.target.value);
          setPageNumber(0);
        }}>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          
        </select>
      </div>

      <div className="grid grid-cols-3 px-20 py-1 gap-5 w-full">
        {displayUsers}
      </div>
      
    </div>
  );
};

export default StudentPage;
