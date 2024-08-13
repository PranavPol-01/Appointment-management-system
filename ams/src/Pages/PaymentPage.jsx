import React, { useState } from "react";
import Payment from "../Components/Payment";
import Sidebar from "./../Components/Sidebar";

const initialAppointments = [
  {
    id: 1,
    name: "Arnav Sawant",
    service: "Service",
    inTime: "In time",
    outTime: "Out time",
  },
  {
    id: 2,
    name: "Pranav Pol",
    service: "Service",
    inTime: "In time",
    outTime: "Out time",
  },
  {
    id: 3,
    name: "Siddhant Sathe",
    service: "Service",
    inTime: "In time",
    outTime: "Out time",
  },
];

const PaymentPage = () => {
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleConfirm = (id) => {
    // Confirm logic here
  };

  return (
    <>
      <Payment appointments={appointments} onConfirm={handleConfirm} />
    </>
  );
};

export default PaymentPage;






// import React, { useState } from 'react';
// import Appointments from '../Components/Appoinments';
// import Sidebar from './../Components/Sidebar';

// const initialAppointments = [
//   { id: 1, name: 'Arnav Sawant', service: 'Service', inTime: 'In time', outTime: 'Out time' },
//   { id: 2, name: 'Siddhant Sathe', service: 'Service', inTime: 'In time', outTime: 'Out time' },
//   { id: 3, name: 'Pranav Hawkins', service: 'Service', inTime: 'In time', outTime: 'Out time' },
// ];

// const AppointmentPage = () => {
//   const [appointments, setAppointments] = useState(initialAppointments);

//   const handleConfirm = (id) => {
//     // Confirm logic here
//   };

//   const handleCancel = (id) => {
//     // Cancel logic here
//   };

//   return (
//     <><Appointments
//           appointments={appointments}
//           onConfirm={handleConfirm}
//           onCancel={handleCancel} /></>
//   );
// };

// export default AppointmentPage;
