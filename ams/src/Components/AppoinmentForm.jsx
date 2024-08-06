
import React, { useState, useEffect } from 'react';

const AppointmentForm = ({ appointment, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    time: '',
    status: '',
    outlet: '',
    email: '',
    package: '',
    mobile: '',
    preference: ''
  });

  useEffect(() => {
    if (appointment) {
      setFormData(appointment);
    }
  }, [appointment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Book Appointment & Edit Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-2 border"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 border"
          />
          <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="Service"
            className="p-2 border"
          />
          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="p-2 border"
          >
            <option value="">Package</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
          </select>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="Time"
            className="p-2 border"
          />
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile Number"
            className="p-2 border"
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="p-2 border"
          >
            <option value="">Status</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
          </select>
          <input
            type="text"
            name="outlet"
            value={formData.outlet}
            onChange={handleChange}
            placeholder="Outlet"
            className="p-2 border"
          />
          <input
            type="text"
            name="preference"
            value={formData.preference}
            onChange={handleChange}
            placeholder="Preference"
            className="col-span-2 p-2 border"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 mt-4"
        >
          Save
        </button>
        <button
          type="button"
          className="bg-red-500 text-white p-2 mt-4 ml-2"
          onClick={onCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
