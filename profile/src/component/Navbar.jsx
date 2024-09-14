

import React from 'react'

const Navbar = () => {
  return (
   <div className='flex min-h-screen'>
     <div className='min-w-48 bg-blue-500 px-10 py-10 '>
      <h2 className='text-white py-5 text-4xl '>CIT {`Tech_Divas</>`}</h2>
      <ul className='py-10 text-2xl text-white'>
        <li className='mb-5 hover:text-black'>
          <a href='/'>Dashboard</a>
        </li>
        <li className='mb-5 hover:text-black'>
          <a href='/student'>Student</a>
        </li>
      </ul>
    </div>
   </div>

  )
}

export default Navbar