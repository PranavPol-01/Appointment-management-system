import React, { useEffect, useState } from "react";
import Appointments from "../Components/Appoinments";
import initialAppointments from "../Data/initialAppointment";
import LogoutWarning from "@/Components/LogoutWarning";

const AppointmentPage = () => {

  const [token, setToken] = useState(null);
  const [appointments, setAppointments] = useState(initialAppointments);
  useEffect(() => {
    setToken(localStorage.getItem("token"));
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
