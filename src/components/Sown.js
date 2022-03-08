import React, { useState } from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "../ApplicationViews";
import "./Sown.css";

export const Sown = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("sown_user") !== null
  );

  const setAuthUser = (user) => {
    sessionStorage.setItem("sown_user", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("sown_user") !== null);
  };

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("sown_user") !== null);
  };

  return (
    <>
      <NavBar />
      <ApplicationViews
        setAuthUser={setAuthUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </>
  );
};
