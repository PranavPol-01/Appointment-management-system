// import React, { useState ,useEffect} from "react";
// import Payment from "../Components/Payment";
// import Sidebar from "./../Components/Sidebar";
// import LogoutWarning from "@/Components/LogoutWarning";
// import { jwtDecode } from "jwt-decode";

// const initialAppointments = [
//   {
//     id: 1,
//     name: "Arnav Sawant",
//     service: "Service",
//     inTime: "In time",
//     outTime: "Out time",
//   },
//   {
//     id: 2,
//     name: "Pranav Pol",
//     service: "Service",
//     inTime: "In time",
//     outTime: "Out time",
//   },
//   {
//     id: 3,
//     name: "Siddhant Sathe",
//     service: "Service",
//     inTime: "In time",
//     outTime: "Out time",
//   },
// ];

// const PaymentPage = () => {
//   const [token, setToken] = useState({
//     token: "",
//     user_data:{}
//   });
//   const [appointments, setAppointments] = useState(initialAppointments);

//   const handleConfirm = (id) => {
//     // Confirm logic here
//   };
//   useEffect(() => {
//     setToken(JSON.parse(localStorage.getItem("auth_data")));
//     console.log(token.token);
//     try {
//       const decoded = jwtDecode(token.token)
//       const currentTime = Date.now() / 1000;
//       if (decoded.exp < currentTime) {
//         localStorage.removeItem("auth_data");
//         setToken({ token: "", user_data: {} });
//       }
//     } catch (error) {
//       console.log(error);      
//     }
//   }, [])

//   return (
//     <>
//       {token ?(
//         <Payment appointments={appointments} onConfirm={handleConfirm} />
//       ):(
//         <LogoutWarning/>
//       )}
//     </>
//   );
// };

// export default PaymentPage;






// // import React, { useState } from 'react';
// // import Appointments from '../Components/Appoinments';
// // import Sidebar from './../Components/Sidebar';

// // const initialAppointments = [
// //   { id: 1, name: 'Arnav Sawant', service: 'Service', inTime: 'In time', outTime: 'Out time' },
// //   { id: 2, name: 'Siddhant Sathe', service: 'Service', inTime: 'In time', outTime: 'Out time' },
// //   { id: 3, name: 'Pranav Hawkins', service: 'Service', inTime: 'In time', outTime: 'Out time' },
// // ];

// // const AppointmentPage = () => {
// //   const [appointments, setAppointments] = useState(initialAppointments);

// //   const handleConfirm = (id) => {
// //     // Confirm logic here
// //   };

// //   const handleCancel = (id) => {
// //     // Cancel logic here
// //   };

// //   return (
// //     <><Appointments
// //           appointments={appointments}
// //           onConfirm={handleConfirm}
// //           onCancel={handleCancel} /></>
// //   );
// // };

// // export default AppointmentPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/api/get-all-appointments-staff-confirm");
        console.log(response.data.service_appointments);
        setAppointments(response.data.service_appointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);
  const handleConfirm = async (appointment) => {
    try {
      console.log(appointment);
      
      await axios.put(`http://127.0.0.1:5000/api/confirm-appointment/${appointment._id}`);
      // Pass appointment data to PaymentForm
      navigate("/payment-form", { state: { appointment } });
    } catch (error) {
      console.error("Error confirming appointment:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Confirmed Appointments</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b text-center">Name</th>
              <th className="px-4 py-2 border-b text-center">Services</th>
              <th className="px-4 py-2 border-b text-center">Packages</th>
              <th className="px-4 py-2 border-b text-center">Time</th>
              <th className="px-4 py-2 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-center">{appointment.customer_name}</td>
                <td className="px-4 py-2 border-b text-center">
                  {appointment.service_id.map((service, index) => (
                    <div key={index}>{service.service_name}</div>
                  ))}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {appointment.package_id.map((pkg, index) => (
                    <div key={index}>{pkg.package_name}</div>
                  ))}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  {new Date(appointment.time).toLocaleString()}
                </td>
                <td className="px-4 py-2 border-b text-center">
                  <button
                    className="text-green-500 px-3 py-1 rounded m-1"
                    onClick={() => handleConfirm(appointment)}
                  >
                    Confirm for Payment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentPage;
