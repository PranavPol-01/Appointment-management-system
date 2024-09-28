// import React, { useEffect, useState } from "react";
// import Appointments from "../Components/Appoinments";
// import initialAppointments from "../Data/initialAppointment";
// import LogoutWarning from "@/Components/LogoutWarning";
// import { jwtDecode } from "jwt-decode";

// const AppointmentPage = () => {

//   const [token, setToken] = useState({
//     token: "",
//     user_data:{}
//   });
//   const [appointments, setAppointments] = useState(initialAppointments);

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

//   const handleConfirm = (id) => {
//     // Confirm logic here
//   };

//   const handleCancel = (id) => {
//     // Cancel logic here
//   };

//   return (
//     <>
//       {token ? (
//         <Appointments
//           appointments={appointments}
//           onConfirm={handleConfirm}
//           onCancel={handleCancel}
//         />
//       ) : (
//         <LogoutWarning />
//       )}
//     </>
//   );
// };

// export default AppointmentPage;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Appointments from "../Components/Appoinments";
import LogoutWarning from "@/Components/LogoutWarning";
import {jwtDecode} from "jwt-decode";

const AppointmentPage = () => {
  const [token, setToken] = useState({
    token: "",
    user_data: {}
  });
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
    //     const userData = JSON.parse(localStorage.getItem("auth_data"));
    // const outletId = userData ? userData.user_data.outlet_id : null;
    //    // Replace with actual outlet ID
    //     const response = await axios.get(`http://127.0.0.1:5000/api/get-all-appointments-staff/${outletId}`, {
      const response = await axios.get("http://127.0.0.1:5000/api/get-all-appointments-staff", {
          // headers: {
          //   Authorization: `Bearer ${token.token}`,
          // },
        });
        console.log("All service appointments",response.data.service_appointments)
        setAppointments(response.data.service_appointments);
        // console.log(appointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    const authData = JSON.parse(localStorage.getItem("auth_data"));
    if (authData) {
      setToken(authData);
      try {
        const decoded = jwtDecode(authData.token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
          localStorage.removeItem("auth_data");
          setToken({ token: "", user_data: {} });
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAppointments();
  }, []);

  

  return (
    <>
      {token ? (
        <Appointments
          appointments={appointments}
          onConfirm={() => { /* Handle confirm logic */ }}
          onCancel={() => { /* Handle cancel logic */ }}
        />
      ) : (
        <LogoutWarning />
      )}
    </>
  );
};

export default AppointmentPage;
