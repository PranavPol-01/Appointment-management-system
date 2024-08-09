import React, { useState, useEffect } from "react";

const AppointmentForm = ({
  appointment,
  onSave,
  onCancel,
  allServices,
  allPackages,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    inTime: "",
    outTime: "",
    services: [{ service: "", package: "" }],
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
      [name]: value,
    });
  };

  const handleServiceChange = (index, e) => {
    const { name, value } = e.target;
    const newServices = [...formData.services];
    newServices[index][name] = value;
    setFormData({ ...formData, services: newServices });
  };

  const handleAddService = () => {
    setFormData({
      ...formData,
      services: [...formData.services, { service: "", package: "" }],
    });
  };

  const handleRemoveService = (index) => {
    const newServices = [...formData.services];
    newServices.splice(index, 1);
    setFormData({ ...formData, services: newServices });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Appointment Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-2 border rounded-md"
            />
          
          <br />

          <input
            type="datetime-local"
            name="inTime"
            value={formData.inTime}
            onChange={handleChange}
            placeholder="In Time"
            className="p-2 border rounded-md"
          />
          <input
            type="datetime-local"
            name="outTime"
            value={formData.outTime}
            onChange={handleChange}
            placeholder="Out Time"
            className="p-2 border rounded-md"
          />
        </div>

        <div className="mt-4">
          <h2 className="text-lg mb-2">Services</h2>
          {formData.services.map((srv, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2"
            >
              <select
                name="service"
                value={srv.service}
                onChange={(e) => handleServiceChange(index, e)}
                className="p-2 border rounded-md"
              >
                <option value="">Select Service</option>
                {allServices.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
              <select
                name="package"
                value={srv.package}
                onChange={(e) => handleServiceChange(index, e)}
                className="p-2 border rounded-md"
              >
                <option value="">Select Package</option>
                {allPackages.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="col-span-2 text-red-500"
                onClick={() => handleRemoveService(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="text-blue-500 mt-2"
            onClick={handleAddService}
          >
            + Add Another Service
          </button>
        </div>

        <div className="mt-4">
          <button type="submit" className="bg-green-500 text-white p-2 mt-4">
            Save
          </button>
          <button
            type="button"
            className="bg-red-500 text-white p-2 mt-4 ml-2"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
