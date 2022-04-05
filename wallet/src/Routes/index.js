import React from 'react';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';
import { Route, Routes } from 'react-router-dom'

function Roads() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/wallet" element={ <Wallet /> } />
    </Routes> 
  )
}

export default Roads;
