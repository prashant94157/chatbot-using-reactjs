import React from 'react';
import { useSelector } from 'react-redux';

const BookedSlot = () => {
  const userData = useSelector((state) => state.userData);
  const { date, time } = userData;

  return (
    <div className='show-date'>
      <div>{date.date}</div>
      <div>{date.day}</div>
      <div>{time}</div>
    </div>
  );
};

export default BookedSlot;
