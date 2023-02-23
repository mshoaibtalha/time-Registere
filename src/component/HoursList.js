import React from 'react';
import HourCard from './HourCard';

const HoursList = ({ hours, handleDone, removeHour }) => {
  return (
    <ul className='card__items'>
      {hours.map((hour) => (
        <HourCard
          key={hour.id}
          hour={hour}
          handleDone={handleDone}
          removeHour={removeHour}
        />
      ))}
      ;
    </ul>
  );
};

export default HoursList;
