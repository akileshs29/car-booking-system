

import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import CarListing from '../pages/CarListing';
import Cardetails from '../pages/Cardetails';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import NotFound from '../pages/NotFound';
import Login from '../pages/login';
import SignUp from '../pages/signup';
import Contact from '../pages/Contact';
import UserDetails from '../pages/UserDetails';

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/Details' element={<UserDetails/>} />
    <Route path='/cars' element={<CarListing/>} />
    <Route path='/cars/:slug' element={<Cardetails/>} />
    <Route path='/blogs' element={<Blog/>} />
    <Route path='/blogs/:slug' element={<BlogDetails/>} />
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/notfound' element={<NotFound/>} />
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
}

export default Routers;