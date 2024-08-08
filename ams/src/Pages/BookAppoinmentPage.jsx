import React from "react";
import { useNavigate } from "react-router-dom";
import AppointmentForm from "../Components/AppoinmentForm";
import Sidebar from "../Components/Sidebar";

const BookAppointmentPage = () => {
  const history = useNavigate();

  const handleSave = (formData) => {
    // Add new appointment logic here
    history.push("/appointments");
  };

  return (
    <>
      <AppointmentForm
        onSave={handleSave}
        onCancel={() => history.push("/appointments")}
      />
    </>
  );
};

export default BookAppointmentPage;
