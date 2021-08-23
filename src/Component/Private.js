import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = (props) => {
  const  token   = useSelector((state)=>state.users.token)
  console.log("auth", token);

  return token ? (
    <Route {...props} />
  ) : (
    <Redirect to={{pathname: "/login"}}/>) }
