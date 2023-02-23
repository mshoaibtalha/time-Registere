import React, { useState } from 'react';

const HourForm = ({ addHour }) => {
  const [description, setDescription] = useState('');
  const [putHours, setputHours] = useState('');

  const hoursHandle = (e) => {
    e.preventDefault();
    setputHours(e.target.value);
  };

  const descriptionHandle = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHour({
      id: Date.now(),
      description: description,
      hours: putHours,
      done: false,
    });
    setputHours('');
    setDescription('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h1 className='form__title'>Registere Ny Timer</h1>

      <label htmlFor='description'>Kommentar</label>
      <input
        type='text'
        className='form__input'
        placeholder='Skrive Komentar ...'
        value={description}
        onChange={descriptionHandle}
      />

      <label htmlFor='title'>Timer</label>
      <input
        type='number'
        className='form__input'
        value={putHours}
        required
        placeholder='Skrive Timer ...'
        onChange={hoursHandle}
      />
      <button type='submit' className='form__button-submit'>
        Lagre
      </button>
    </form>
  );
};

export default HourForm;
