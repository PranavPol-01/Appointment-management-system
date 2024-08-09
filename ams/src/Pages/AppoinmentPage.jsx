import React, { useState } from "react";
import Appointments from "../Components/Appoinments";
import initialAppointments from "../Data/initialAppointment";



const AppointmentPage = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleConfirm = (id) => {
    // Confirm logic here
  };

  const handleCancel = (id) => {
    // Cancel logic here
  };

  return (
    <>
      <Appointments
        appointments={appointments}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
};

export default AppointmentPage;
