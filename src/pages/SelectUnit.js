import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';


// SomeComponent.js
const clientID = parseInt(process.env.REACT_APP_CLIENT_ID);

function SelectUnit() {
  const location = useLocation();
  const selectedDate = location.state;

  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleClickBook = () => {
    // Set the state to true to show the booking form
    setShowBookingForm(true);
  };

  function formatDate(date) {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };

    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div>
      <h2>SelectUnit Page</h2>
      <p>Selected Date: {(selectedDate).toDateString()}</p>

      {/* Conditionally render the booking form based on the state */}
      {showBookingForm ? (
        <BookingForm rentDates={[formatDate(selectedDate)]}/>
      ) : (
        <button onClick={handleClickBook}>Book Now</button>
      )}
    </div>
  );
};

// Separate component for the BookingForm
const BookingForm = ({rentDates}) => {
  const [formData, setFormData] = useState({
    clientID: clientID,
    rentDates: JSON.stringify(rentDates),
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
        const response = await fetch('http://127.0.0.1:5000/add_contract', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log('Contract added successfully');
        } else {
            console.error('Error adding contract');
        }
    } catch (error) {
        console.error('Error:', error);
    }

    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h3>Booking Form</h3>
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstNameInput">First Name</label>
        <input
            type="text"
            id="firstNameInput"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
        />

        <label htmlFor="lastNameInput">Last Name</label>
        <input
            type="text"
            id="lastNameInput"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
        />

        <label htmlFor="emailInput">Email</label>
        <input
            type="email"
            id="emailInput"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
        />

      <PaymentForm
        applicationId="sandbox-sq0idb-VJRw3fsbLnl9pieyHixr2Q"
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
          console.log('token:', token);
          console.log('verifiedBuyer:', verifiedBuyer);
        }}
        locationId='LTA3P3HJBFK8A'
      >
        <CreditCard/>
      </PaymentForm>

        <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default SelectUnit;