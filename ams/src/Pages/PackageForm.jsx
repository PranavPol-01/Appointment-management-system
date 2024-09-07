import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { packages } from '../Data/package';
import { services } from '../Data/service';
import LogoutWarning from '@/Components/LogoutWarning';

const PackageForm = () => {
  const { id } = useParams();  
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState({
    name: '',
    price: '',
    time: '',
    category: '',
    services: [],
  });
  const [token,setToken] = useState(null);
  useEffect(() => {
    if (id) {
      const existingPackage = packages.find((pkg) => pkg.id === parseInt(id));
      if (existingPackage) {
        setPackageData(existingPackage);
      }
    }
    setToken(localStorage.getItem('token'))
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPackageData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setPackageData((prevState) => ({
      ...prevState,
      services: checked
        ? [...prevState.services, value]
        : prevState.services.filter((service) => service !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(packageData);
    navigate('/package-master');
  };

  return (
    <>
    {token ? (
      <>
      <div className="p-4">
      <h1 className="text-3xl mb-4">{id ? 'Edit Package' : 'Add Package'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={packageData.name}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Price</label>
          <input
            type="text"
            name="price"
            value={packageData.price}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Time</label>
          <input
            type="text"
            name="time"
            value={packageData.time}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={packageData.category}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Services</label>
          {services.map((service) => (
            <div key={service.id}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={service.name}
                  checked={packageData.services.includes(service.name)}
                  onChange={handleServiceChange}
                  className="form-checkbox"
                />
                <span className="ml-2">{service.name}</span>
              </label>
            </div>
          ))}
        </div>

        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">
          Save
        </button>
      </form>
    </div>
      </>
    ):(
      <LogoutWarning/>
    )}
    </>
  );
};

export default PackageForm;
