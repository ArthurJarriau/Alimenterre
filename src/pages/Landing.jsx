import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from '../components/App';
import { useContext } from 'react';

const Landing = () => {

  const { loginState, handleLogin } = useContext(AuthContext);
  if(loginState.user){
    return <Navigate
        to='/home'
      />
  }
  return (
    <>
      <ul>
        <li><Link to='/login'>Se connecter</Link></li>
        <li><Link to='/register'>S'inscrire</Link></li>
      </ul>
    </>
  )
}

export default Landing
