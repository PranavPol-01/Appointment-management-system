
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import edit from "../assets/edit _button.svg";  

const filterAppointments = (appointments, filter) => {
  const now = new Date();

  switch (filter) {
    case 'Today':
      return appointments.filter(appointment => {
        const inTime = new Date(appointment.inTime);
        return inTime.toDateString() === now.toDateString();
      });

    case 'Last Week':
      const oneWeekAgo = new Date(now);
      oneWeekAgo.setDate(now.getDate() - 7);
      return appointments.filter(appointment => {
        const inTime = new Date(appointment.inTime);
        return inTime > oneWeekAgo && inTime <= now;
      });

    case 'Last Month':
      const oneMonthAgo = new Date(now);
      oneMonthAgo.setMonth(now.getMonth() - 1);
      return appointments.filter(appointment => {
        const inTime = new Date(appointment.inTime);
        return inTime > oneMonthAgo && inTime <= now;
      });

    default:
      return appointments;
  }
};

const Appointments = ({ appointments, onConfirm, onCancel }) => {
  const [filter, setFilter] = useState('Last Week');

  const filteredAppointments = filterAppointments(appointments, filter);

  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Appointments</h1>

      <div className="flex lg:justify-end mb-4">
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

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b text-center">Name</th>
              <th className="px-4 py-2 border-b text-center">Service</th>
              <th className="px-4 py-2 border-b text-center">In time</th>
              <th className="px-4 py-2 border-b text-center">Out time</th>
              <th className="px-4 py-2 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment) => (
              <tr key={appointment.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-center">{appointment.name}</td>
                <td className="px-4 py-2 border-b text-center">{appointment.services.service}</td>
                <td className="px-4 py-2 border-b text-center">{appointment.inTime}</td>
                <td className="px-4 py-2 border-b text-center">{appointment.outTime}</td>
                <td className="px-4 py-2 border-b text-center flex justify-center items-center">
                  <button
                    className="text-green-500 px-3 py-1 rounded m-1"
                    onClick={() => onConfirm(appointment.id)}
                  >
                    Confirm
                  </button>
                  <button
                    className="text-red-500 px-3 py-1 rounded m-1"
                    onClick={() => onCancel(appointment.id)}
                  >
                    Cancel
                  </button>
                  <div className="flex justify-center items-center">
                    <Link
                      to={`/edit-appointment/${appointment.id}`}
                      state={{ appointment }}
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
