import React, { useState } from "react";

function PaymentForm() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    time: "",
    outlet: "",
    package: "",
    staffName: "",
    modeOfPayment: "Cash", // assuming default value
    totalAmount: 800, // assuming default value
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Submit logic here
  };

  return (
    <form>
      <div className="flex">
        <div className="flex py-5">
          <h1 className="px-2">Name:-</h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
          />
        </div>
        {/* <select name="outlet" onChange={handleInputChange}>
        {/* Options go here }
      </select> */}
        <div className="flex">
          <h1 className="px-2">Service:-</h1>
          <input
            type="text"
            name="service"
            placeholder="Service"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <select name="package" onChange={handleInputChange}>
        {/* Options go here */}
      </select>
      <input
        type="text"
        name="time"
        placeholder="Time"
        onChange={handleInputChange}
      />
      {/* Clock icon interaction would be handled separately */}
      <input
        type="text"
        name="staffName"
        placeholder="Staff Name"
        onChange={handleInputChange}
      />

      <div className="py-9">
        Mode of Payment:
        <label className="px-3">
          <input
            type="radio"
            name="modeOfPayment"
            value="Cash"
            checked={formData.modeOfPayment === "Cash"}
            onChange={handleInputChange}
          />
          Cash
        </label>
        <label>
          <input
            type="radio"
            name="modeOfPayment"
            value="Online"
            checked={formData.modeOfPayment === "Online"}
            onChange={handleInputChange}
          />
          Online
        </label>
      </div>

      <div className="">Total amount: {formData.totalAmount} /-</div>

      <button
        className="three bg-blue-500 rounded-lg float-right px-3 "
        onClick={handleSubmit}
      >
        Save
      </button>
    </form>
  );
}

export default PaymentForm;
