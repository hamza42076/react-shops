import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from "react-router";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import Page404 from './Pages/page404.jsx';
import Product from './Pages/Product.jsx';
import Products from './Pages/Products.jsx';


const App = () => {
  
  return(
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element= {<About/>} />
      <Route path='/contact' element= {<Contact/>} />
      <Route path='/product'>
      <Route index element= {<Product/>} />
      <Route path=':id' element={<Products/>} />

      </Route>
      <Route path='*' element= {<Page404/>} />
    </Routes>
    </>

  )
}

export default App
