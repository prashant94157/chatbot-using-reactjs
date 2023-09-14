import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'react-chatbot-kit/build/main.css';
import './App.css';
import BotScreen from './screens/BotScreen';
import UserDataScreen from './screens/UserDataScreen';
import NotFoundScreen from './screens/NotFoundScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/user' element={<UserDataScreen />} />
        <Route path='/' element={<BotScreen />} />
        <Route path='/*' element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
