import React from 'react'

const CoursesPage = () => {
    const courses=[
        {name:"CSE"},
        {name:"IT"},
        {name:"AIDS"},
        {name:"CSBS"},
        {name:"EEE"},
        {name:"ECE"},
        {name:"MECH"},
        {name:"BME"},
        {name:"CIVIL"},

    ]
  return (
    <div>
        <h2 className='text-center text-3xl leading-10'>CoursesPage</h2>
        <div>
        <div className="grid grid-cols-3 gap-5  px-20 py-20 text-4xl text-blue-500 font-serif">


            {courses.map((course,index)=>(
                <div key={index} className="w-full px-12 py-12 text-center rounded-xl  bg-white ">
                <h2 >{course.name}</h2>
              </div>
            ))}
        </div> 
        
        </div>
    </div>
  )
}

export default CoursesPage