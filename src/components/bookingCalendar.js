import React, { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
// import 'react-calendar/dist/Calendar.css';

function BookingCalendar({ getSelectedDates }) {
  const [selectedDates, setSelectedDates] = useState(new Set());
  const [blockedDates, setBlockedDates] = useState(new Set());
  const [bookedDates, setBookedDates] = useState(new Set());
  const [availableDates, setAvailableDates] = useState(new Set());

  const legendItems = ["available", "selected", "booked", "blocked"];

  const callbackRef = useRef(getSelectedDates);

  useEffect(() => {}, []);

  useEffect(() => {
    callbackRef.current(selectedDates);
  }, [selectedDates]);

  function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  const handleClickDay = (date, event) => {
    event.preventDefault();
    // if (availbility.has(value))

    const updatedDates = new Set(selectedDates);
    const dateString = date.toDateString();

    if (updatedDates.has(dateString)) {
      updatedDates.delete(dateString);
    } else {
      updatedDates.add(dateString);
    }
    if ((updatedDates, selectedDates)) setSelectedDates(updatedDates);
  };

  const updateCalenderTiles = ({ date }) => {
    const dateString = date.toDateString();
    if (blockedDates.has(dateString)) {
      return "booking-calendar-tile-blocked";
    } else if (bookedDates.has(dateString)) {
      return "booking-calendar-tile-booked";
    } else if (selectedDates.has(dateString)) {
      return "booking-calendar-tile-selected";
    } else {
      return "booking-calendar-tile-available";
    }
  };

  const getAvailability = async ({ activeStartDate }) => {
    const startDate = addDays(activeStartDate, -7);
    const startDate_str = startDate.toISOString().slice(0, 16);
    const endDate_str = addDays(activeStartDate, 34).toISOString().slice(0, 16);

    console.log("start date: ", startDate_str);
    console.log("end date: ", endDate_str);

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    fetch(
      `http://127.0.0.1:8000/available_units?client_id=1&start_date=${startDate_str}&end_date=${endDate_str}`,
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));

    const response = await fetch(
      `http://127.0.0.1:8000/available_units?client_id=1&start_date=${startDate_str}&end_date=${endDate_str}`,
      requestOptions,
    );

    const datesJSON = await response.json;

    for (let date in datesJSON) {
      if (datesJSON[date].length === 0) {
      } else {
        for (const unit in datesJSON[date]) {
          if (unit["price"] > 0) {
          }
        }
      }
    }
  };

  return (
    <>
      <Calendar
        tileClassName={updateCalenderTiles}
        onClickDay={handleClickDay}
        onActiveStartDateChange={getAvailability}
        goToRangeStartOnSelect={false}
      />
      <div className="calendar-legend">
        {legendItems.map((item) => (
          <div className="calendar-legend-item">
            <div
              className={`calendar-legend-item-color booking-calendar-tile-${item}`}
            />
            <p className="calendar-legend-item-label">{item}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default BookingCalendar;
