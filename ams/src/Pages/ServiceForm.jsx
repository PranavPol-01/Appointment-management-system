import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../Data/service';
import LogoutWarning from '@/Components/LogoutWarning';
import { jwtDecode } from 'jwt-decode';

const ServiceForm = () => {
  const { id } = useParams();  
  const [token, setToken] = useState({
    token: null,
    user_data:{}
  });
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState({
    name: '',
    price: '',
    duration: '',
  });

  useEffect(() => {
    if (id) {
      const existingService = services.find((service) => service.id === parseInt(id));
      if (existingService) {
        setServiceData(existingService);
      }
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(serviceData);
    navigate('/services');
  };
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("auth_data")));
    console.log(token.token);
    try {
      const decoded = jwtDecode(token.token)
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        localStorage.removeItem("auth_data");
        setToken({ token: null, user_data: {} });
      }
    } catch (error) {
      console.log(error);      
    }
  }, [])

  return (
    <>
    {token ?(
      <div className="p-4">
      <h1 className="text-3xl mb-4">{id ? 'Edit Service' : 'Add Service'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={serviceData.name}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={serviceData.price}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Duration</label>
          <input
            type="text"
            name="duration"
            value={serviceData.duration}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </div>
    ):(
      <LogoutWarning/>
    )}
    </>
  );
};

export default ServiceForm;
