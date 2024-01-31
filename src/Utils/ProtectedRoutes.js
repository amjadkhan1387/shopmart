import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LoginCheck } from "./AuthCheck";


export default function ProtectedRoutes(props) {
  const location = useLocation();

  // CheckRole(location.pathname.replace(/\//g, ""));

  LoginCheck();

  const { Component } = props;
  return (
    <>
      <Component />
    </>
  );
}
