import React from 'react'
import Profile from './component/Profile'
import Navbar from './component/Navbar'

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import Dashboard from './Pages/Dashboard'
import StudentPage from './Pages/StudentPage'
import CoursesPage from './Pages/CoursesPage'

const App = () => {
  const Layout=()=>{
    return(
      <div className='flex'>
        <Navbar/>
        <div className='w-full bg-slate-200'>
        <Outlet/>
        </div>

      </div>
    )
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route  path='/' element={<Dashboard/>}/>
      <Route  path='/student' element={<StudentPage/>}/>
      <Route  path='/courses' element={<CoursesPage/>}/>

      </Route>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App