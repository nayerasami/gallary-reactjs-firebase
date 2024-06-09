import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const ProtectedRouting = (props) => {
  const cookie = new Cookies();
  const authToken = cookie.get('authToken');

  if (authToken) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRouting;
