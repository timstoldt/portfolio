import React, { useEffect, useState } from "react";

// tile that shows unit information
function RenterInfoForm({ getFormSubmitted }) {
  const [inputs, setInputs] = useState({});

  const handleFormChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    getFormSubmitted(inputs);
    // upload data to server and return confirmation???
  };

  return (
    <>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={inputs.firstName || ""}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={inputs.lastName || ""}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          {" "}
          Address
          <input
            type="text"
            name="address"
            value={inputs.address || ""}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          {" "}
          City
          <input
            type="text"
            name="city"
            value={inputs.city || ""}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          {" "}
          State
          <input
            type="text"
            name="state"
            value={inputs.state || ""}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          {" "}
          Zip
          <input
            type="text"
            name="zip"
            value={inputs.zip || ""}
            onChange={handleFormChange}
            required
          />
        </label>
        <label>
          {" "}
          Phone
          <input
            type="tel"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleFormChange}
            required
          />
        </label>
        <button type="submit">Continue To Payment</button>
      </form>
    </>
  );
}

export default RenterInfoForm;
