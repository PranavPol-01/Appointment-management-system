import React, { useEffect, useState } from "react";
import Appointments from "../Components/Appoinments";
import initialAppointments from "../Data/initialAppointment";
import LogoutWarning from "@/Components/LogoutWarning";

const AppointmentPage = () => {

  const [token, setToken] = useState({
    token: null,
    user_data:{}
  });
  const [appointments, setAppointments] = useState(initialAppointments);
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("auth_data")));
  }, [])
  const handleConfirm = (id) => {
    // Confirm logic here
  };

  const handleCancel = (id) => {
    // Cancel logic here
  };

  return (
    <>
      {token.token ? (
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
