import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManagerForm = () => {
  const [formData, setFormData] = useState({
    staff_name: "",
    email: "",
    gender: "",
    category: "manager",  // Fixed as "manager"
    password: "",
    staff_mobile_number: ""
  });

  const navigate = useNavigate();

  const fetchMobileNumbers = async (inputValue) => {
    if (!inputValue) return [];
    try {
      const response = await axios.get(`http://localhost:5000/api/get-users?mobile_phone=${inputValue}`);
      return response.data.map((user) => ({
        label: `${user.staff_name} (${user.staff_mobile_number})`,
        value: user.staff_mobile_number,
        userData: user,
      }));
    } catch (error) {
      console.error("Error fetching users", error);
      return [];
    }
  };

  const handleMobileChange = (selectedOption) => {
    if (selectedOption?.userData) {
      setFormData({
        ...formData,
        staff_name: selectedOption.userData.staff_name,
        email: selectedOption.userData.email || "",
        staff_mobile_number: selectedOption.userData.staff_mobile_number,
      });
    } else {
      setFormData({ ...formData, staff_mobile_number: selectedOption?.value || "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/signup", formData);
      alert("Manager added successfully");
    } catch (error) {
      console.error("Error adding manager", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-gray-200 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Add Manager</h2>
      <AsyncSelect
        cacheOptions
        loadOptions={fetchMobileNumbers}
        onChange={handleMobileChange}
        placeholder="Search Mobile Number"
        isClearable
      />
      {/* Name, email, password */}
      <div className="mt-4">
    <label className="block text-sm font-medium text-gray-700">Name</label>
    <input
      type="text"
      name="name"
      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      placeholder="Enter name"
      required
    />
  </div>
  <div className="mt-4">
    <label className="block text-sm font-medium text-gray-700">Email</label>
    <input
      type="email"
      name="email"
      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      placeholder="Enter email"
      required
    />
  </div>
  <div className="mt-4">
    <label className="block text-sm font-medium text-gray-700">Password</label>
    <input
      type="password"
      name="password"
      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      placeholder="Enter password"
      required
    />
  </div>
      <button type="submit" className="bg-green-500 text-white p-2 rounded mt-4">Submit</button>
    </form>
  );
};

export default ManagerForm;
