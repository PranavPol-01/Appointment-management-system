import React, { useState } from "react";
import Appointments from "../Components/Appoinments";

const initialAppointments = [
  { 
    id: 1, 
    name: 'Jane Cooper', 
    service: 'Haircut', 
    inTime: '2024-08-07T09:30:00', 
    outTime: '2024-08-07T10:00:00' 
  },
  { 
    id: 2, 
    name: 'Jenny Wilson', 
    service: 'Manicure', 
    inTime: '2024-08-05T14:00:00', 
    outTime: '2024-08-05T15:00:00' 
  },
  { 
    id: 3, 
    name: 'Guy Hawkins', 
    service: 'Massage', 
    inTime: '2024-08-01T11:00:00', 
    outTime: '2024-08-01T12:00:00' 
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
