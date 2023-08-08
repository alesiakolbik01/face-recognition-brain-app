import './App.css';
import 'tachyons';
import { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Protected from './components/Protected/Protected';

import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const logIn = (value, userId) => {
      setIsLoggedIn(value);
      setUserId(userId)
  };

  const registerUser = (value, userId) => {
    setIsLoggedIn(value);
    setUserId(userId);
  }

  const logOut = () => {
    setIsLoggedIn(false);
    setUserId(null);
  };

  return (
    <Routes>
       <Route path='/'
         element={
           <Protected isLoggedIn={isLoggedIn} logIn={logIn}>
             <HomePage userId={userId} logOut={logOut} />
           </Protected>
         }
       />
      <Route path='/register' element={userId ? <Navigate to="/" /> : <Register registerUser={registerUser}/>}/>
    </Routes>
  )
}

export default App;
