import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../Data/service';

const ServiceForm = () => {
  const { id } = useParams();  
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

  return (
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
  );
};

export default ServiceForm;
