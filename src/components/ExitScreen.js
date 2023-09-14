import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExitScreen = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    let id = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    if (counter < 1) {
      clearInterval(id);
      navigate('/user');
    }

    return () => {
      clearInterval(id);
    };
  });

  return (
    <div className='counter'>
      <div>{counter}</div>
    </div>
  );
};

export default ExitScreen;
