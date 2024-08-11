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
    additionalServices: [""],
  });

  useEffect(() => {
    if (appointment) {
      setFormData({
        ...appointment,
        services: appointment.services.map((srv) => ({
          service: srv.service,
          package: srv.package,
        })),
        additionalServices: appointment.additionalServices || [""],
      });
    }
  }, [appointment]);
  console.log(
    "third",
    formData.services.map((srv, index) => ({
      index: index,
      service: srv.service,
      package: srv.package,
    }))
  );

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
    newServices[index] = {
      ...newServices[index],
      [name]: value,
    };
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

  const handleAdditionalServiceChange = (index, e) => {
    const { value } = e.target;
    const newAdditionalServices = [...formData.additionalServices];
    newAdditionalServices[index] = value;
    setFormData({ ...formData, additionalServices: newAdditionalServices });
  };

  const handleAddAdditionalService = () => {
    setFormData({
      ...formData,
      additionalServices: [...formData.additionalServices, ""],
    });
  };

  const handleRemoveAdditionalService = (index) => {
    const newAdditionalServices = [...formData.additionalServices];
    newAdditionalServices.splice(index, 1);
    setFormData({ ...formData, additionalServices: newAdditionalServices });
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
          {formData.services.map((srv, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2"
            >
              <select
                name={"service"}
                value={srv.service}
                onChange={(e) => handleServiceChange(index, e)}
                className="p-2 border rounded-md"
              >
                {/* <option value="">Select Service</option>
                {formData.services.map((service, idx) => (
                  <option key={idx} value={service.service}>
                    {service.service}
                  </option>
                ))} */}
                <option value="">Select Service</option>
                {allServices.map((service) => (
                  <option key={service.id} value={service.name}>
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
                  <option key={pkg.id} value={pkg.name}>
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
          <h2 className="text-lg mb-2">Additional Services</h2>
          {formData.additionalServices.map((additionalService, index) => (
            <div key={index} className="flex gap-4 mb-2">
              <input
                type="text"
                value={additionalService}
                onChange={(e) => handleAdditionalServiceChange(index, e)}
                placeholder="Additional Service"
                className="p-2 border rounded-md flex-grow"
              />
              <button
                type="button"
                className="text-red-500"
                onClick={() => handleRemoveAdditionalService(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            className="text-blue-500 mt-2"
            onClick={handleAddAdditionalService}
          >
            + Add Another Additional Service
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
//   console.log(formData)

//   console.log('first', formData.services.map(svr => svr.service));
//   console.log('second', formData.services.map(svr => svr.package));

//   console.log('third', formData.services.map((srv, index) => ({
//     index: index,
//     service: srv.service,
//     package: srv.package
//   })));

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
//     newServices[index][name] = value;
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
//                 name="service"
//                 value={srv.service}
//                 onChange={(e) => handleServiceChange(index, e)}
//                 className="p-2 border rounded-md"
//               >
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
