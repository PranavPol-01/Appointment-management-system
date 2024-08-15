import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AppointmentPage from "./Pages/AppoinmentPage";
import EditAppointmentPage from "./Pages/EditAppoinmentPage";
import BookAppointmentPage from "./Pages/BookAppoinmentPage";
import Sidebar from "./Components/Sidebar";
import PackageForm from "./Pages/PackageForm";
import PackageMaster from "./Pages/PackageMaster";
import ServiceMaster from "./Pages/ServiceMaster";
// import EditService from "./Pages/EditService";
import ServiceForm from "./Pages/ServiceForm";

function App() {
  const location = useLocation();
  const noSidebarRoutes = ["/", "/signup"];

  return (
    <>
      {!noSidebarRoutes.includes(location.pathname) && <Sidebar />}
      <div
        className={
          noSidebarRoutes.includes(location.pathname)
            ? ""
            : "lg:ml-72 p-5 mt-14"
        }
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/appointments" element={<AppointmentPage />} />
          <Route
            path="/edit-appointment/:id"
            element={<EditAppointmentPage />}
          />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/package-master" element={<PackageMaster />} />
          <Route path="/add-package" element={<PackageForm />} />
          <Route path="/edit-package/:id" element={<PackageForm />} />
          <Route path="/services" element={<ServiceMaster />} />
          <Route path="/add-service" element={<ServiceForm />} />
          <Route path="/edit-service/:id" element={<ServiceForm />} />
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
