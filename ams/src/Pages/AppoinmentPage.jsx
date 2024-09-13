import React, { useEffect, useState } from "react";
import Appointments from "../Components/Appoinments";
import initialAppointments from "../Data/initialAppointment";
import LogoutWarning from "@/Components/LogoutWarning";
import { jwtDecode } from "jwt-decode";

const AppointmentPage = () => {

  const [token, setToken] = useState({
    token: "",
    user_data:{}
  });
  const [appointments, setAppointments] = useState(initialAppointments);

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("auth_data")));
    console.log(token.token);
    try {
      const decoded = jwtDecode(token.token)
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        localStorage.removeItem("auth_data");
        setToken({ token: null, user_data: {} });
      }
    } catch (error) {
      console.log(error);      
    }
  }, [])

  const handleConfirm = (id) => {
    // Confirm logic here
  };

  const handleCancel = (id) => {
    // Cancel logic here
  };

  return (
    <>
      {token ? (
        <Appointments
          appointments={appointments}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      ) : (
        <LogoutWarning />
      )}
    </>
  );
};

export default AppointmentPage;
