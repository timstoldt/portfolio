// Home.js

import React, { useEffect, useState } from 'react';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Home.css';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [makeClientClicked, setMakeClientCliced] = useState(false);
  const navigate = useNavigate();

  const handleClickDay = (value, event) => {
    setSelectedDate(value);
  };

  const handleClickMakeClient = () => {
    setMakeClientCliced(true);
  }

  useEffect(() => {
    if (selectedDate) {
      const url = `/selectunit`;
      navigate(url, { state: selectedDate });
    }
  }, [selectedDate, navigate]);

  useEffect(() => {
    if (makeClientClicked) {
      const url = `/newClient`;
      navigate(url);
    }
  }, [makeClientClicked, navigate]);


  return <div>
    <Calender onClickDay={handleClickDay}/>
    <button onClick={handleClickMakeClient}>Make Client</button>
  </div>;
};

export default Home;
