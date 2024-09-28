import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import edit from "../assets/edit _button.svg";
import axios from "axios";
import Select from "react-select";

const filterAppointments = (appointments, filter, outletNames) => {
  const now = new Date();

  switch (filter) {
    case "Today":
      return appointments.filter((appointment) => {
        const inTime = new Date(appointment.time);
        const isToday = inTime.toDateString() === now.toDateString();

        const matchesOutlet = outletNames.some(
          (outlet) => outlet.value === appointment.outlet_id?._id
        );

        // Debugging
        // console.log("Checking appointment:", appointment);
        // console.log("Is today:", isToday);
        // console.log("Matches outlet:", matchesOutlet);

        return isToday && matchesOutlet;
      });

    case "Last Week":
      const oneWeekAgo = new Date(now);
      oneWeekAgo.setDate(now.getDate() - 7);
      return appointments.filter((appointment) => {
        const inTime = new Date(appointment.time);
        const lastWeek = inTime > oneWeekAgo && inTime <= now
        const matchesOutlet = outletNames.some(
          (outlet) => outlet.value === appointment.outlet_id?._id
        );
        // console.log("Checking appointment:", appointment);
        // console.log("Is last week:", lastWeek);
        // console.log("Matches outlet:", matchesOutlet);

        return lastWeek && matchesOutlet;
      });

    case "Last Month":
      const oneMonthAgo = new Date(now);
      oneMonthAgo.setMonth(now.getMonth() - 1);
      return appointments.filter((appointment) => {
        const inTime = new Date(appointment.time);
        const lastMonth = inTime > oneMonthAgo && inTime <= now
        const matchesOutlet = outletNames.some(
          (outlet) => outlet.value === appointment.outlet_id?._id
        );
        // console.log("Checking appointment:", appointment);
        // console.log("Is last week:", lastMonth);
        // console.log("Matches outlet:", matchesOutlet);
        
        return lastMonth && matchesOutlet;
      });

    default:
      return appointments;
  }
};

const Appointments = ({ appointments, onConfirm, onCancel }) => {
  const [filter, setFilter] = useState("Today");

  const handleConfirm = async (id) => {
    try {
      const response = await axios.put(
        `http://127.0.0.1:5000/api/confirm-appointment/${id}`
      );
      console.log(response.data.message);

      onConfirm(); // Callback to refresh appointments
    } catch (error) {
      console.error("Error confirming appointment:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:5000/api/delete-appointment-staff/${id}`
        );
        console.log(response.data.message);

        onCancel(); // Callback to refresh appointments
      } catch (error) {
        console.error("Error deleting appointment:", error);
      }
    }
  };

  const [outlets, setOutlets] = useState([]);
  const [outletNames, setOutletNames] = useState([]);
  const getOutlets = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/outlet", {
        headers: {
          // Authorization: `Bearer ${
          //   JSON.parse(localStorage.getItem("auth_data")).token
          // }`,
        },
      });
      const outlets = response.data;
      setOutlets(outlets);
      console.log("outlets", outlets);
      console.log("outletsNames", outletNames);
      localStorage.setItem('outlet_id',outletNames[0].value)
    } catch (error) {
      console.log("Error while fetching outlets", error);
    }
  };

  useEffect(() => {
    getOutlets();
    console.log("Appointments", appointments);
  }, [appointments,outletNames]);

  const filteredAppointments = filterAppointments(
    appointments,
    filter,
    outletNames
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Appointments</h1>

      <div className="flex flex-row justify-between">
        <div className="flex justify-end mb-4">
          <label className="mr-2">Choose Outlets:</label>
          <Select
            isMulti
            options={outlets.map((outlet) => ({
              value: outlet._id,
              label: outlet.outlet_name,
            }))}
            value={outletNames}
            onChange={(outletNames) => {
              setOutletNames(outletNames),
                console.log("selected outlet names", outletNames)                
            }}
          />
        </div>
        <div className="flex justify-end mb-4">
          <label className="mr-2">Sort by:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="Today">Today</option>
            <option value="Last Week">Last Week</option>
            <option value="Last Month">Last Month</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b text-center">Name</th>
              <th className="px-4 py-2 border-b text-center">Services</th>
              <th className="px-4 py-2 border-b text-center">Packages</th>
              <th className="px-4 py-2 border-b text-center">Time</th>
              <th className="px-4 py-2 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment) => (
              <tr key={appointment._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-center">
                  {appointment.customer_name}
                </td>

                {/* Rendering services */}
                <td className="px-4 py-2 border-b text-center">
                  {appointment.service_id.map((service, index) => (
                    <div key={index}>{service.service_name}</div>
                  ))}
                </td>

                {/* Rendering packages */}
                <td className="px-4 py-2 border-b text-center">
                  {appointment.package_id.map((pkg, index) => (
                    <div key={index}>{pkg.package_name}</div>
                  ))}
                </td>

                {/* Rendering time */}
                <td className="px-4 py-2 border-b text-center">
                  {new Date(appointment.time).toLocaleString()}
                </td>

                {/* Action buttons */}
                <td className="px-4 py-2 border-b text-center flex justify-center items-center">
                  <button
                    className="text-green-500 px-3 py-1 rounded m-1"
                    onClick={() => handleConfirm(appointment._id)}
                  >
                    Confirm
                  </button>
                  <button
                    className="text-red-500 px-3 py-1 rounded m-1"
                    onClick={() => handleDelete(appointment._id)}
                  >
                    Cancel
                  </button>
                  <div className="flex justify-center items-center">
                    <Link
                      to={`/edit-appointment/${appointment._id}`}
                      state={{
                        appointment: {
                          ...appointment,
                          services: appointment.service_id,
                          packages: appointment.package_id,
                          time: appointment.time,
                        },
                      }}
                      className="px-3 py-1 rounded m-1 w-20"
                    >
                      <img src={edit} alt="edit" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
