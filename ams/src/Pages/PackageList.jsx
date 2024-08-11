import React from 'react';
import { Link } from 'react-router-dom';
import edit from "../assets/edit _button.svg";  

const PackageList = ({ packages, onDelete, onEdit }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Package Master</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b text-center">Name</th>
              <th className="px-4 py-2 border-b text-center">Price</th>
              <th className="px-4 py-2 border-b text-center">Time Taken</th>
              <th className="px-4 py-2 border-b text-center">Category</th>
              <th className="px-4 py-2 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b text-center">{pkg.name}</td>
                <td className="px-4 py-2 border-b text-center">{pkg.price}</td>
                <td className="px-4 py-2 border-b text-center">{pkg.time}</td>
                <td className="px-4 py-2 border-b text-center">{pkg.category}</td>
                <td className="px-4 py-2 border-b text-center flex justify-center items-center">
                  <button
                    className="text-red-500 px-3 py-1 rounded m-1"
                    onClick={() => onDelete(pkg.id)}
                  >
                    🗑️
                  </button>
                  <div className="flex justify-center items-center">
                    <Link
                      to={`/edit-package/${pkg.id}`}
                      state={{ package: pkg }}
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
      <button
        onClick={() => onEdit(null)}
        className="bg-red-500 text-white p-2 mt-4 rounded"
      >
        Add Package
      </button>
    </div>
  );
};

export default PackageList;
