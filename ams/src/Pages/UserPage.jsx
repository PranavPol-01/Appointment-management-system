import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    mobile_phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/api/add-user", formData);
      console.log("User added successfully");
      navigate("/users");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-2 border rounded-md"
            required
          />
          <input
            type="tel"
            name="mobile_phone"
            value={formData.mobile_phone}
            onChange={handleChange}
            placeholder="Mobile Phone"
            className="p-2 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email (Optional)"
            className="p-2 border rounded-md"
          />
        </div>
        <div className="mt-4">
          <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserPage;
