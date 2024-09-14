import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-slate-200">
      <div className="font-lead text-5xl text-center mt-3">{`CIT Tech_Divas</>`}</div>
      <div className="px-20  mb-5 mt-5">
        <input
          className="w-4/5 py-2 px-4 bg-slate-100"
          placeholder="Search Student..."
        />
      </div>
      <div className="grid grid-cols-3   px-20 py-1 gap-5 w-full">
        <div className=" px-10 py-5 text-3xl bg-slate-50 rounded-xl shadow-2xl ">
          <h2>Total Students</h2>
          <h2 className="text-red-500 font-semibold">1950</h2>
        </div>
        <div className="px-10 py-5 text-3xl bg-slate-50 rounded-xl shadow-2xl ">
          <h2>Total Departments</h2>
          <h2 className="text-red-500 font-semibold">10</h2>
        </div>
        <div className="px-10 py-5 text-3xl bg-slate-50 rounded-xl shadow-2xl ">
          <h2>Total Placed </h2>
          <h2 className="text-red-500 font-semibold">500</h2>
        </div>
      </div>
      <div className="ml-20 text-3xl  mt-10 py-4 underline">Courses</div>
      <div className="grid grid-cols-3 gap-5 ml-20 px-20 py-1 text-2xl">
        <div className="w-full px-10 py-2  bg-slate-50 rounded-xl shadow-2xl">
          <h2>CSE</h2>
          <h2 className="font-bold text-red-400">500</h2>
        </div>
        <div className="w-full px-10 py-2  bg-white rounded-xl">
          <h2>IT</h2>
          <h2 className="font-bold text-red-400">400</h2>
        </div>
        <div className="w-full px-10 py-2  bg-white ">
          <h2>AIDS</h2>
          <h2 className="font-bold text-red-400">100</h2>
        </div>
        <div className="w-full px-10 py-2  bg-white ">
          <h2>BME</h2>
          <h2 className="font-bold text-red-400">350</h2>
        </div>
        <div className="w-full px-10 py-2  bg-white">
          <h2>ECE</h2>
          <h2 className="font-bold text-red-400">320</h2>
        </div>
        <div className="w-full px-10 py-2  bg-white ">
          <h2>EEE</h2>
          <h2 className="font-bold text-red-400">210</h2>
        </div>
        <div className="w-full px-10 py-2  bg-white ">
          <h2>MECH</h2>
          <h2 className="font-bold text-red-400">310</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
