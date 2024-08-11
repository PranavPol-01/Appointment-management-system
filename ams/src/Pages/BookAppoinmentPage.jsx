import React from "react";
import { useNavigate } from "react-router-dom";
import AppointmentForm from "../Components/AppoinmentForm";

const BookAppointmentPage = () => {
  const navigate = useNavigate();

  const allServices = [
    { id: 1, name: 'Haircut' },
    { id: 2, name: 'Manicure' },
    { id: 3, name: 'Massage' },
  ];

  const allPackages = [
    { id: 1, name: 'Basic ' },
    { id: 2, name: 'Delux ' },
    { id: 3, name: 'Premium ' },
  ];

  const handleSaveAppointment = (formData) => {
    console.log("New appointment:", formData);
    navigate("/appointments");
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Book Appointment</h1>
      <AppointmentForm
        onSave={handleSaveAppointment}
        onCancel={() => navigate("/appointments")}
        allServices={allServices}
        allPackages={allPackages}
      />
    </div>
  );
};

export default BookAppointmentPage;
