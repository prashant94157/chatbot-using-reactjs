import React from 'react';

const StartBtn = (props) => {
  const startBtnHandler = () => {
    props.actions.startBtnHandler();
  };

  return (
    <button className='start-btn' onClick={() => startBtnHandler()}>
      Enroll Now!
    </button>
  );
};

export default StartBtn;
