import React, { useState } from "react";
import Appointments from "../Components/Appoinments";
import Sidebar from "./../Components/Sidebar";

const initialAppointments = [
  {
    id: 1,
    name: "Jane Cooper",
    service: "Service",
    inTime: "In time",
    outTime: "Out time",
  },
  {
    id: 2,
    name: "Jenny Wilson",
    service: "Service",
    inTime: "In time",
    outTime: "Out time",
  },
  {
    id: 3,
    name: "Guy Hawkins",
    service: "Service",
    inTime: "In time",
    outTime: "Out time",
  },
];

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
