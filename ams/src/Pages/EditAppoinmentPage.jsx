
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppointmentForm from "../Components/AppoinmentForm";

const EditAppointmentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { appointment } = location.state || {};

  const allServices = [
    { id: 1, name: 'Haircut' },
    { id: 2, name: 'Manicure' },
    { id: 3, name: 'Massage' },
    // Add more services as needed
  ];

  const allPackages = [
    { id: 1, name: 'Basic ' },
    { id: 2, name: 'Deluxe ' },
    { id: 3, name: 'Premium ' },
    // Add more packages as needed
  ];

  const handleSave = (formData) => {
    console.log("Updated appointment:", formData);
    navigate("/appointments");
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Edit Appointment</h1>
      <AppointmentForm
        appointment={appointment}
        onSave={handleSave}
        onCancel={() => navigate("/appointments")}
        allServices={allServices}
        allPackages={allPackages}
      />
    </div>
  );
};

export default EditAppointmentPage;
