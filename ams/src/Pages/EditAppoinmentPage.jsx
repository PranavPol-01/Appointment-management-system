import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppointmentForm from "../Components/AppoinmentForm";
import Sidebar from "./../Components/Sidebar";

const EditAppointmentPage = () => {
  const location = useLocation();
  const history = useNavigate();
  const { appointment } = location.state || {};

  const handleSave = (formData) => {
    // Update appointment logic here
    history.push("/appointments");
  };

  return (
    <>
      <AppointmentForm
        appointment={appointment}
        onSave={handleSave}
        onCancel={() => history.push("/appointments")}
      />
    </>
  );
};

export default EditAppointmentPage;
