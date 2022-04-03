import { useState, useEffect } from "react";
import React from "react";
import { Home } from "../Home";

export const PropsAndState = ({ users }) => {
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   Home();
  // }, []);

  return (
    <>
      <h3 className="welcome-name">Welcome! </h3>
    </>
  );
};
