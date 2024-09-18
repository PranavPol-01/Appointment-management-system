
// import React, { useState, useEffect } from "react";

// const AppointmentForm = ({
//   appointment,
//   onSave,
//   onCancel,
//   allServices,
//   allPackages,
// }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     inTime: "",
//     outTime: "",
//     services: [],
//     packages: [],
//     additionalServices: [],
//   });

//   const [serviceSearch, setServiceSearch] = useState("");
//   const [packageSearch, setPackageSearch] = useState("");
//   const [showServiceSuggestions, setShowServiceSuggestions] = useState(false);
//   const [showPackageSuggestions, setShowPackageSuggestions] = useState(false);

//   useEffect(() => {
//     if (appointment) {
//       setFormData({
//         ...appointment,
//         services: appointment.services || [],
//         packages: appointment.packages || [],
//         additionalServices: appointment.additionalServices || [],
//       });
//     }
//   }, [appointment]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleServiceSearchChange = (e) => {
//     setServiceSearch(e.target.value);
//     setShowServiceSuggestions(true);
//   };

//   const handlePackageSearchChange = (e) => {
//     setPackageSearch(e.target.value);
//     setShowPackageSuggestions(true);
//   };

//   const handleServiceFocus = () => {
//     setShowServiceSuggestions(true);
//   };

//   const handlePackageFocus = () => {
//     setShowPackageSuggestions(true);
//   };

//   const handleServiceSelect = (service) => {
//     if (!formData.services.some(s => s.id === service.id)) {
//       setFormData({
//         ...formData,
//         services: [...formData.services, service],
//       });
//     }
//     setServiceSearch("");
//     setShowServiceSuggestions(false);
//   };

//   const handlePackageSelect = (pkg) => {
//     if (!formData.packages.some(p => p.id === pkg.id)) {
//       setFormData({
//         ...formData,
//         packages: [...formData.packages, pkg],
//       });
//     }
//     setPackageSearch("");
//     setShowPackageSuggestions(false);
//   };

//   const handleRemoveService = (index) => {
//     const newServices = [...formData.services];
//     newServices.splice(index, 1);
//     setFormData({ ...formData, services: newServices });
//   };

//   const handleRemovePackage = (index) => {
//     const newPackages = [...formData.packages];
//     newPackages.splice(index, 1);
//     setFormData({ ...formData, packages: newPackages });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl mb-4">Appointment Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Name"
//             className="p-2 border rounded-md"
//           />
//           <input
//             type="datetime-local"
//             name="inTime"
//             value={formData.inTime}
//             onChange={handleChange}
//             placeholder="In Time"
//             className="p-2 border rounded-md"
//           />
//           <input
//             type="datetime-local"
//             name="outTime"
//             value={formData.outTime}
//             onChange={handleChange}
//             placeholder="Out Time"
//             className="p-2 border rounded-md"
//           />
//         </div>

//         <div className="mt-4">
//           <h2 className="text-lg mb-2">Services</h2>
//           <div className="relative">
//             <input
//               type="text"
//               value={serviceSearch}
//               onChange={handleServiceSearchChange}
//               onFocus={handleServiceFocus}
//               placeholder="Search Services"
//               className="p-2 border rounded-md w-full"
//             />
//             {showServiceSuggestions && (
//               <ul className="absolute bg-white border border-gray-300 rounded-md w-full max-h-40 overflow-y-auto">
//                 {allServices
//                   .filter((service) =>
//                     service.name
//                       .toLowerCase()
//                       .includes(serviceSearch.toLowerCase())
//                   )
//                   .map((service) => (
//                     <li
//                       key={service.id}
//                       onClick={() => handleServiceSelect(service)}
//                       className="p-2 hover:bg-gray-200 cursor-pointer"
//                     >
//                       {service.name}
//                     </li>
//                   ))}
//               </ul>
//             )}
//           </div>
//           <div className="mt-2">
//             {formData.services.map((service, index) => (
//               <div
//                 key={service.id}
//                 className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
//               >
//                 <span>{service.service}</span>
//                 <button
//                   type="button"
//                   className="text-red-500"
//                   onClick={() => handleRemoveService(index)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-4">
//           <h2 className="text-lg mb-2">Packages</h2>
//           <div className="relative">
//             <input
//               type="text"
//               value={packageSearch}
//               onChange={handlePackageSearchChange}
//               onFocus={handlePackageFocus}
//               placeholder="Search Packages"
//               className="p-2 border rounded-md w-full"
//             />
//             {showPackageSuggestions && (
//               <ul className="absolute bg-white border border-gray-300 rounded-md w-full max-h-40 overflow-y-auto">
//                 {allPackages
//                   .filter((pkg) =>
//                     pkg.name.toLowerCase().includes(packageSearch.toLowerCase())
//                   )
//                   .map((pkg) => (
//                     <li
//                       key={pkg.id}
//                       onClick={() => handlePackageSelect(pkg)}
//                       className="p-2 hover:bg-gray-200 cursor-pointer"
//                     >
//                       {pkg.name}
//                     </li>
//                   ))}
//               </ul>
//             )}
//           </div>
//           <div className="mt-2">
//             {formData.packages.map((pkg, index) => (
//               <div
//                 key={pkg.id}
//                 className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
//               >
//                 <span>{pkg.name}</span>
//                 <button
//                   type="button"
//                   className="text-red-500"
//                   onClick={() => handleRemovePackage(index)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-4">
//           <button type="submit" className="bg-green-500 text-white p-2 mt-4">
//             Save
//           </button>
//           <button
//             type="button"
//             className="bg-red-500 text-white p-2 mt-4 ml-2"
//             onClick={onCancel}
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AppointmentForm;
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select"; // Import react-select for dynamic dropdown

const AppointmentForm = ({ appointment, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_mobile_phone: "",
    status: "",
    time: "",
    services: [],
    packages: [],
    staff_id: "",
  });

  const [allServices, setAllServices] = useState([]);
  const [allPackages, setAllPackages] = useState([]);

  // Fetch services and packages when the component mounts
  useEffect(() => {
    const fetchServicesAndPackages = async () => {
      try {
        const servicesResponse = await axios.get('http://127.0.0.1:5000/api/services');
        const packagesResponse = await axios.get("http://127.0.0.1:5000/api/packages");

        // Map services and packages to the react-select format (label, value)
        const servicesOptions = servicesResponse.data.map(service => ({
          label: service.service_name,
          value: service.id,
        }));

        const packagesOptions = packagesResponse.data.map(pkg => ({
          label: pkg.package_name,
          value: pkg.id,
        }));

        setAllServices(servicesOptions);
        setAllPackages(packagesOptions);
      } catch (error) {
        console.error("Error fetching services or packages:", error);
      }
    };
    fetchServicesAndPackages();
  }, []);

  useEffect(() => {
    if (appointment) {
      setFormData({
        ...appointment,
        services: appointment.services?.map(s => ({ value: s.id, label: s.name })) || [],
        packages: appointment.packages?.map(p => ({ value: p.id, label: p.name })) || [],
      });
    }
  }, [appointment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle service and package changes using react-select
  const handleServiceChange = (selectedOptions) => {
    setFormData({
      ...formData,
      services: selectedOptions || [],
    });
  };

  const handlePackageChange = (selectedOptions) => {
    setFormData({
      ...formData,
      packages: selectedOptions || [],
    });
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
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            placeholder="Customer Name"
            className="p-2 border rounded-md"
          />
          <input
            type="email"
            name="customer_email"
            value={formData.customer_email}
            onChange={handleChange}
            placeholder="Customer Email"
            className="p-2 border rounded-md"
          />
          <input
            type="tel"
            name="customer_mobile_phone"
            value={formData.customer_mobile_phone}
            onChange={handleChange}
            placeholder="Customer Mobile Phone"
            className="p-2 border rounded-md"
          />
          <input
            type="datetime-local"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="Time"
            className="p-2 border rounded-md"
          />
        </div>

        <div className="mt-4">
          <h2 className="text-lg mb-2">Status</h2>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
          >
            <option value="">Select Status</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Services Selection */}
        <div className="mt-4">
          <h2 className="text-lg mb-2">Services</h2>
          <Select
            isMulti
            options={allServices}
            value={formData.services}
            onChange={handleServiceChange}
            placeholder="Search and select services"
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        {/* Packages Selection */}
        <div className="mt-4">
          <h2 className="text-lg mb-2">Packages</h2>
          <Select
            isMulti
            options={allPackages}
            value={formData.packages}
            onChange={handlePackageChange}
            placeholder="Search and select packages"
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="mt-4 flex justify-between">
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            Save Appointment
          </button>
          <button
            type="button"
            className="p-2 bg-red-500 text-white rounded-md"
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
