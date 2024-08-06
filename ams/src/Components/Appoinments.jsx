
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Appointments = ({ appointments, onConfirm, onCancel }) => {
  const history = useNavigate();

  const handleEdit = (appointment) => {
    history.push(`/edit-appointment/${appointment.id}`, { appointment });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Appointments to be Confirmed</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>In time</th>
            <th>Out time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.name}</td>
              <td>{appointment.service}</td>
              <td>{appointment.inTime}</td>
              <td>{appointment.outTime}</td>
              <td>
                <button
                  className="bg-green-500 text-white p-2 m-1"
                  onClick={() => onConfirm(appointment.id)}
                >
                  Confirm
                </button>
                <button
                  className="bg-red-500 text-white p-2 m-1"
                  onClick={() => onCancel(appointment.id)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white p-2 m-1"
                  onClick={() => handleEdit(appointment)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
