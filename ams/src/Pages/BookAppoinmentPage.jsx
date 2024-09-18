import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AppointmentForm from "../Components/AppoinmentForm";
import LogoutWarning from "@/Components/LogoutWarning";
import { jwtDecode } from "jwt-decode";

const BookAppointmentPage = () => {
  const navigate = useNavigate();

  const allServices = [
    { id: 1, name: 'Haircut' },
    { id: 2, name: 'Manicure' },
    { id: 3, name: 'Massage' },
  ];

  const allPackages = [
    { id: 1, name: 'Basic ' },
    { id: 2, name: 'Delux ' },
    { id: 3, name: 'Premium ' },
  ];

  const handleSaveAppointment = (formData) => {
    console.log("New appointment:", formData);
    navigate("/appointments");
  };
  const [token, setToken] = useState({
    token: "",
    user_data:{}
  });
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
      <div className="p-4">
      <h1 className="text-3xl mb-4">Book Appointment</h1>
      <AppointmentForm
        onSave={handleSaveAppointment}
        onCancel={() => navigate("/appointments")}
        allServices={allServices}
        allPackages={allPackages}
      />
    </div>
    ):(
      <LogoutWarning/>
    )}
    </>
  );
};

export default BookAppointmentPage;
