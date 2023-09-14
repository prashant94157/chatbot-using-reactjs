import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const UserDataScreen = () => {
  const userName = useSelector((state) => state.userName);
  const userAge = useSelector((state) => state.userAge);

  const { name } = userName;
  const { age } = userAge;

  if (name === undefined || age === undefined)
    return <Navigate to='/' replace />;

  return (
    <div className='app'>
      <div className='para'>{`Your name ${name} aged ${age} has been added to student system. You may now exit.`}</div>
    </div>
  );
};

export default UserDataScreen;
