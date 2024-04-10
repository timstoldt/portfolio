// Home.js

import React, { useEffect, useState } from "react";

import BookingCalendar from "../components/bookingCalendar";
import UnitTile from "../components/unitTile";

import "./Home.css";
import RenterInfoForm from "../components/renterInfoForm";
import UnitPaymentForm from "../components/unitPaymentForm";
import UnitTileList from "../components/unitTileList";

function Home() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [selectedUnits, setSelectedUnits] = useState({}); // {"<date>": "<unit_id"}
  const [renterInfo, setRenterInfo] = useState(null);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  // useEffect(() => {
  // }, [selectedDates])

  const getSelectedDates = (dates) => {
    setSelectedDates(Array.from(dates).sort());
  };

  const getFormSubmitted = (info) => {
    if (info) {
      setRenterInfo(info);
    }
  };

  const getPaymentSubmitted = (submitted) => {
    if (submitted) {
      setPaymentSubmitted(true);
    }
  };

  // update selectedUnits
  const onUnitSelection = (e, date) => {
    setSelectedUnits({
      ...selectedUnits, // copy old fields
      date: e.target.value,
    });
  };

  if (!paymentSubmitted) {
    return (
      <>
        <BookingCalendar getSelectedDates={getSelectedDates} />

        <div className="selected-dates">
          {selectedDates.map((date) => (
            <div className="selected-dates-date">
              <p>{date}</p>
              <UnitTileList date={date} />
            </div>
          ))}
        </div>

        {!renterInfo ? (
          <RenterInfoForm getFormSubmitted={getFormSubmitted} />
        ) : (
          <UnitPaymentForm getPaymentSubmitted={getPaymentSubmitted} />
        )}
      </>
    );
  } else {
    return (
      <>
        <p>SUCCESS PAGE</p>
      </>
    );
  }
}

export default Home;
