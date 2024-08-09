import { useState } from "react";
import "./App.css";
// import { BrowserRouter,  Route, Routes } from "react-router-dom";
// import Login from './Pages/Login';
// import Signup from './Pages/Signup';
// import Home from './Pages/Home';
// import AppointmentPage from './Pages/AppoinmentPage';
// import EditAppointmentPage from './Pages/EditAppoinmentPage';
// import BookAppointmentPage from './Pages/BookAppoinmentPage';
import Sidebar from "./Components/Sidebar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Sidebar /> */}
      <Login />
    </>
  );
}

export default App;
