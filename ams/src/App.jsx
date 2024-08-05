import { useState } from 'react'
import './App.css'
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  

  return (
    <>
      <BrowserRouter>
        
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
