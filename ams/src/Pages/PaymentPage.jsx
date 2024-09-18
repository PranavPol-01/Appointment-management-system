import React, { useState ,useEffect} from "react";
import Payment from "../Components/Payment";
import Sidebar from "./../Components/Sidebar";
import LogoutWarning from "@/Components/LogoutWarning";
import { jwtDecode } from "jwt-decode";

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
  const [token, setToken] = useState({
    token: "",
    user_data:{}
  });
  const [appointments, setAppointments] = useState(initialAppointments);

  const handleConfirm = (id) => {
    // Confirm logic here
  };
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("auth_data")));
    console.log(token.token);
    try {
      const decoded = jwtDecode(token.token)
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        localStorage.removeItem("auth_data");
        setToken({ token: "", user_data: {} });
      }
    } catch (error) {
      console.log(error);      
    }
  }, [])

  return (
    <>
      {token ?(
        <Payment appointments={appointments} onConfirm={handleConfirm} />
      ):(
        <LogoutWarning/>
      )}
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
