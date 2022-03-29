import { useState } from "react";
import React from "react";
import { Home } from "../Home";

export const PropsAndState = ({ users }) => {
  const [user, setUser] = useState({});

  return (
    <>
      <h3 className="welcome-name">Welcome, {user.name}! </h3>
    </>
  );
};
