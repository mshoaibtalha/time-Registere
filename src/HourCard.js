import React from 'react';

const HourCard = ({ hour, handleDone, removeHour }) => {
  return (
    <li
      className={hour.done ? 'card card--completed ' : 'card'}
      key={hour.id}
      onClick={() => handleDone(hour)}
    >
      <p className='card__hours'>{hour.hours}</p>
      <p className='card__description'>{hour.description}</p>
      {hour.done ? (
        <button
          type='button'
          className='card__button--remove'
          onClick={(e) => removeHour(e, hour.id)}
        >
          Remove
        </button>
      ) : null}
    </li>
  );
};
export default HourCard;
