
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppointmentForm from "../Components/AppoinmentForm";
import LogoutWarning from "@/Components/LogoutWarning";

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

  const [token, setToken] = useState({
    token: null,
    user_data:{}
  });
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("auth_data")));
  }, [])

  return (
    <>
      {token.token ? (
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
      ) : (
        <LogoutWarning />
      )}
    </>
  );
};

export default EditAppointmentPage;
