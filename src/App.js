import './App.css';
import 'tachyons';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Protected from './components/Protected/Protected';

import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const logIn = (value, userId) => {
      setIsLoggedIn(value);
      setUserId(userId);
  };

  const registerUser = (value, userId) => {
    setIsLoggedIn(value);
    setUserId(userId);
  }

  const setUserSession = (userData) => {
    sessionStorage.setItem('auth', JSON.stringify(userData));
  }

  const getUserSession = () => {
    const userAuthData = JSON.parse(sessionStorage.getItem('auth'));
    if(userAuthData){
      logIn(true, userAuthData.userId);
    }
  }

  const logOut = () => {
    setIsLoggedIn(false);
    setUserId(null);
    sessionStorage.removeItem('auth');
  };

  useEffect(
    () => {
      getUserSession();

       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
  )

  return (
    <Routes>
       <Route path='/'
         element={
           <Protected isLoggedIn={isLoggedIn} logIn={logIn} setUserSession={setUserSession} getUserSession={getUserSession}>
             <HomePage userId={userId} logOut={logOut} />
           </Protected>
         }
       />
      <Route path='/register' element={userId ? <Navigate to="/" /> : <Register registerUser={registerUser} setUserSession={setUserSession}/>}/>
    </Routes>
  )
}

export default App;
