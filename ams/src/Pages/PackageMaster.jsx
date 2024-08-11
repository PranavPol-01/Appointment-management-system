import React from 'react';
import { Link } from 'react-router-dom';
import { packages } from '../Data/package';
import edit from "../assets/edit _button.svg";  // Your edit icon
import { useState } from 'react';

const PackageMaster = () => {
    // const [packages, setPackages] = useState();
    // const handleDelete = (id) => {
        // const updatedPackages = packages.filter(pkg => pkg.id !== id);
        // setPackages(updatedPackages);
    //   };
  return (
    <div className="p-4">
      <h1 className="text-3xl mb-4">Package Master</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border-b text-center">Name</th>
              <th className="px-4 py-2 border-b text-center">Price</th>
              <th className="px-4 py-2 border-b text-center">Time</th>
              <th className="px-4 py-2 border-b text-center">Category</th>
              <th className="px-4 py-2 border-b text-center">Services</th>
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
                <td className="px-4 py-2 border-b text-center">
                  {pkg.services.join(', ')} {/* List services included in the package */}
                </td>
                <td className="px-4 py-2 border-b text-center flex justify-center items-center">
                <button
                    className="px-3 py-1 ml-2 w-20"
                    // onClick={() => handleDelete(pkg.id)}
                  >
                     🗑️
                  </button>
                  <Link
                    to={`/edit-package/${pkg.id}`}
                    className="px-3 py-1 rounded m-1 w-20"
                  >
                    <img src={edit} alt="edit" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="/add-package">
        <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
          Add Package
        </button>
      </Link>
    </div>
  );
};

export default PackageMaster;
