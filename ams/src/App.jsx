import { useState } from 'react'
import './App.css'
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';

function App() {
  

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
