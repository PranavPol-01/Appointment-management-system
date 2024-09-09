import React, { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AppointmentForm from "../Components/AppoinmentForm";
import LogoutWarning from "@/Components/LogoutWarning";

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
    token: null,
    user_data:{}
  });
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("auth_data")));
  }, [])

  return (
    <>
    {token.token ?(
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
