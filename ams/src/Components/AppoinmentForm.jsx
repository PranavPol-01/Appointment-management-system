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
//     services: [{ service: "", package: "" }],
//     additionalServices: [""],
//   });

//   useEffect(() => {
//     if (appointment) {
//       setFormData({
//         ...appointment,
//         services: appointment.services.map((srv) => ({
//           service: srv.service,
//           package: srv.package,
//         })),
//         additionalServices: appointment.additionalServices || [""],
//       });
//     }
//   }, [appointment]);
//   console.log(
//     "third",
//     formData.services.map((srv, index) => ({
//       index: index,
//       service: srv.service,
//       package: srv.package,
//     }))
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleServiceChange = (index, e) => {
//     const { name, value } = e.target;
//     const newServices = [...formData.services];
//     newServices[index] = {
//       ...newServices[index],
//       [name]: value,
//     };
//     setFormData({ ...formData, services: newServices });
//   };

//   const handleAddService = () => {
//     setFormData({
//       ...formData,
//       services: [...formData.services, { service: "", package: "" }],
//     });
//   };

//   const handleRemoveService = (index) => {
//     const newServices = [...formData.services];
//     newServices.splice(index, 1);
//     setFormData({ ...formData, services: newServices });
//   };

//   const handleAdditionalServiceChange = (index, e) => {
//     const { value } = e.target;
//     const newAdditionalServices = [...formData.additionalServices];
//     newAdditionalServices[index] = value;
//     setFormData({ ...formData, additionalServices: newAdditionalServices });
//   };

//   const handleAddAdditionalService = () => {
//     setFormData({
//       ...formData,
//       additionalServices: [...formData.additionalServices, ""],
//     });
//   };

//   const handleRemoveAdditionalService = (index) => {
//     const newAdditionalServices = [...formData.additionalServices];
//     newAdditionalServices.splice(index, 1);
//     setFormData({ ...formData, additionalServices: newAdditionalServices });
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
//           {formData.services.map((srv, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2"
//             >
//               <select
//                 name={"service"}
//                 value={srv.service}
//                 onChange={(e) => handleServiceChange(index, e)}
//                 className="p-2 border rounded-md"
//               >
//                 {/* <option value="">Select Service</option>
//                 {formData.services.map((service, idx) => (
//                   <option key={idx} value={service.service}>
//                     {service.service}
//                   </option>
//                 ))} */}
//                 <option value="">Select Service</option>
//                 {allServices.map((service) => (
//                   <option key={service.id} value={service.name}>
//                     {service.name}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 name="package"
//                 value={srv.package}
//                 onChange={(e) => handleServiceChange(index, e)}
//                 className="p-2 border rounded-md"
//               >
//                 <option value="">Select Package</option>
//                 {allPackages.map((pkg) => (
//                   <option key={pkg.id} value={pkg.name}>
//                     {pkg.name}
//                   </option>
//                 ))}
//               </select>
//               <button
//                 type="button"
//                 className="col-span-2 text-red-500"
//                 onClick={() => handleRemoveService(index)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             className="text-blue-500 mt-2"
//             onClick={handleAddService}
//           >
//             + Add Another Service
//           </button>
//         </div>

//         <div className="mt-4">
//           <h2 className="text-lg mb-2">Additional Services</h2>
//           {formData.additionalServices.map((additionalService, index) => (
//             <div key={index} className="flex gap-4 mb-2">
//               <input
//                 type="text"
//                 value={additionalService}
//                 onChange={(e) => handleAdditionalServiceChange(index, e)}
//                 placeholder="Additional Service"
//                 className="p-2 border rounded-md flex-grow"
//               />
//               <button
//                 type="button"
//                 className="text-red-500"
//                 onClick={() => handleRemoveAdditionalService(index)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             className="text-blue-500 mt-2"
//             onClick={handleAddAdditionalService}
//           >
//             + Add Another Additional Service
//           </button>
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
// import React, { useState, useEffect } from "react";
// import { services } from './../Data/service';

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
//                       onClick={() => handleServiceSelect(service.name)}
//                       className="p-2 hover:bg-gray-200 cursor-pointer"
//                     >
//                       {service.name}
//                     </li>
//                   ))}
//               </ul>
//             )}
//           </div>
//           {/* <div className="mt-2">
//             {formData.services.map((service, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
//               >
//                 <span>{service}</span>
//                 <button
//                   type="button"
//                   className="text-red-500"
//                   onClick={() => handleRemoveService(index)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div> */}
//           <div className="mt-2">
//             {formData.services.map((srv, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
//               >
//                 {/* console.log(services.name) */}
//                 <span>{srv.service}</span>
                
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
//                       onClick={() => handlePackageSelect(pkg.name)}
//                       className="p-2 hover:bg-gray-200 cursor-pointer"
//                     >
//                       {pkg.name}
//                     </li>
//                   ))}
//               </ul>
//             )}
//           </div>
//           {/* <div className="mt-2">
//             {formData.packages.map((pkg, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
//               >
//                 <span>{pkg}</span>
//                 <button
//                   type="button"
//                   className="text-red-500"
//                   onClick={() => handleRemovePackage(index)}
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div> */}
//           <div className="mt-2">
//             {formData.packages.map((pkg, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
//               >
//                 <span>{pkg.packages}</span>
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
    services: [],
    packages: [],
    additionalServices: [],
  });

  const [serviceSearch, setServiceSearch] = useState("");
  const [packageSearch, setPackageSearch] = useState("");
  const [showServiceSuggestions, setShowServiceSuggestions] = useState(false);
  const [showPackageSuggestions, setShowPackageSuggestions] = useState(false);

  useEffect(() => {
    if (appointment) {
      setFormData({
        ...appointment,
        services: appointment.services || [],
        packages: appointment.packages || [],
        additionalServices: appointment.additionalServices || [],
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

  const handleServiceSearchChange = (e) => {
    setServiceSearch(e.target.value);
    setShowServiceSuggestions(true);
  };

  const handlePackageSearchChange = (e) => {
    setPackageSearch(e.target.value);
    setShowPackageSuggestions(true);
  };

  const handleServiceFocus = () => {
    setShowServiceSuggestions(true);
  };

  const handlePackageFocus = () => {
    setShowPackageSuggestions(true);
  };

  const handleServiceSelect = (service) => {
    if (!formData.services.some(s => s.id === service.id)) {
      setFormData({
        ...formData,
        services: [...formData.services, service],
      });
    }
    setServiceSearch("");
    setShowServiceSuggestions(false);
  };

  const handlePackageSelect = (pkg) => {
    if (!formData.packages.some(p => p.id === pkg.id)) {
      setFormData({
        ...formData,
        packages: [...formData.packages, pkg],
      });
    }
    setPackageSearch("");
    setShowPackageSuggestions(false);
  };

  const handleRemoveService = (index) => {
    const newServices = [...formData.services];
    newServices.splice(index, 1);
    setFormData({ ...formData, services: newServices });
  };

  const handleRemovePackage = (index) => {
    const newPackages = [...formData.packages];
    newPackages.splice(index, 1);
    setFormData({ ...formData, packages: newPackages });
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
          <div className="relative">
            <input
              type="text"
              value={serviceSearch}
              onChange={handleServiceSearchChange}
              onFocus={handleServiceFocus}
              placeholder="Search Services"
              className="p-2 border rounded-md w-full"
            />
            {showServiceSuggestions && (
              <ul className="absolute bg-white border border-gray-300 rounded-md w-full max-h-40 overflow-y-auto">
                {allServices
                  .filter((service) =>
                    service.name
                      .toLowerCase()
                      .includes(serviceSearch.toLowerCase())
                  )
                  .map((service) => (
                    <li
                      key={service.id}
                      onClick={() => handleServiceSelect(service)}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {service.name}
                    </li>
                  ))}
              </ul>
            )}
          </div>
          <div className="mt-2">
            {formData.services.map((service, index) => (
              <div
                key={service.id}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
              >
                <span>{service.service}</span>
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => handleRemoveService(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-lg mb-2">Packages</h2>
          <div className="relative">
            <input
              type="text"
              value={packageSearch}
              onChange={handlePackageSearchChange}
              onFocus={handlePackageFocus}
              placeholder="Search Packages"
              className="p-2 border rounded-md w-full"
            />
            {showPackageSuggestions && (
              <ul className="absolute bg-white border border-gray-300 rounded-md w-full max-h-40 overflow-y-auto">
                {allPackages
                  .filter((pkg) =>
                    pkg.name.toLowerCase().includes(packageSearch.toLowerCase())
                  )
                  .map((pkg) => (
                    <li
                      key={pkg.id}
                      onClick={() => handlePackageSelect(pkg)}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {pkg.name}
                    </li>
                  ))}
              </ul>
            )}
          </div>
          <div className="mt-2">
            {formData.packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-md mb-2"
              >
                <span>{pkg.name}</span>
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => handleRemovePackage(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
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
