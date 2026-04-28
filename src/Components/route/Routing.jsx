import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Navbar from '../navbar/Navbar'
import Projects from '../pages/Projects'
import Certificates from '../pages/Certificates'
import Skills from '../pages/Skills'
import Experience from '../pages/Experience'
import PageNotFound from '../pages/PageNotFound'

function RoutIng() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/certificates' element={<Certificates/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutIng
