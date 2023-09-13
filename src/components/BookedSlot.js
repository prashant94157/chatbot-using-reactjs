import React from 'react';

const BookedSlot = (props) => {
  console.log(props);
  return (
    <div className='show-date'>
      <div>{props.state.date.date}</div>
      <div>{props.state.date.day}</div>
      <div>{props.state.time}</div>
    </div>
  );
};

export default BookedSlot;
