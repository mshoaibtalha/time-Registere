import React, { useState, useEffect } from 'react';
import HourForm from './HourForm';
import HoursList from './HoursList';
import './App.css';
import { Popup } from './Popup';

const App = () => {
  const [hours, setHours] = useState(
    JSON.parse(localStorage.getItem('hours')) || []
  );

  const addHour = (item) => {
    setHours([...hours, item]);
  };

  const timer = Object.values(hours).map((hour) => parseInt(hour.hours));
  const totalTimer = timer.reduce((a, b) => a + b, 0);
  const [open, setOpen] = useState(false);

  const removeHour = (e, id) => {
    e.stopPropagation();
    setHours((hours) => hours.filter((item) => item.id !== id));
  };

  const handleDone = (hour) => {
    setHours(
      hours.map((item) => {
        if (item.id === hour.id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };
  useEffect(() => {
    if (totalTimer >= 100) {
      setOpen(true);
    }
  }, [totalTimer]);

  useEffect(() => {
    localStorage.setItem('hours', JSON.stringify(hours));
  }, [hours]);

  return (
    <main>
      <HourForm addHour={addHour} />
      <HoursList
        hours={hours}
        handleDone={handleDone}
        removeHour={removeHour}
      />
      {open ? (
        <Popup
          text={['Your total hours are = ', totalTimer]}
          closePopup={() => setOpen(false)}
        />
      ) : null}
    </main>
  );
};

export default App;
