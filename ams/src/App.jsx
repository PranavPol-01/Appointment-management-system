import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AppointmentPage from './Pages/AppoinmentPage';
import EditAppointmentPage from './Pages/EditAppoinmentPage';
import BookAppointmentPage from './Pages/BookAppoinmentPage';
import Sidebar from "./Components/Sidebar";


function App() {
  const location = useLocation();
  const noSidebarRoutes = ["/", "/signup"];

  return (
    <>
      {!noSidebarRoutes.includes(location.pathname) && <Sidebar />}
      <div className={noSidebarRoutes.includes(location.pathname) ? "" : "ml-64 p-5 mt-14"}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/appointments" element={<AppointmentPage />} />
          <Route
            path="/edit-appointment/:id"
            element={<EditAppointmentPage />}
          />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
        </Routes>
      </div>
    </>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
