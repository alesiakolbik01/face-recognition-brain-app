import './App.css';
import 'tachyons';
import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Protected from './components/Protected/Protected';

import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userData, setuserData] = React.useState(null);

  const logIn = (data) => {
    if(validateUserData(data))
    {
      setIsLoggedIn(true);
      setuserData(data);
    }
  };

  const registerUser = (data) => {
    if(validateUserData(data))
    {
      setIsLoggedIn(true);
      setuserData(data);
    }
  }

  const logOut = () => {
    setIsLoggedIn(false);
    setuserData(null);
  };

  const validateUserData = (data) => {
    return (data.email && data.password)
  }

  return (
    <Routes>
       <Route path='/'
         element={
           <Protected isLoggedIn={isLoggedIn} logIn={logIn}>
             <HomePage logOut={logOut} />
           </Protected>
         }
       />
      <Route path='/register' element={userData ? <Navigate to="/" /> : <Register registerUser={registerUser}/>}/>
    </Routes>
  )
}

export default App;
