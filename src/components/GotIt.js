import React from 'react';
const GotIt = (props) => {
  const startBtnHandler = () => {
    props.actions.gotItHandler();
  };

  return (
    <button className='start-btn' onClick={() => startBtnHandler()}>
      Got it!
    </button>
  );
};

export default GotIt;
