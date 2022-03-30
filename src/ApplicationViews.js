import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { SeedCard } from "./components/seed/SeedCard.js";
import { CollectionCard } from "./components/collections/CollectionCard.js";
import { SeedList } from "./components/seed/SeedList";
import { CollectionList } from "./components/collections/CollectionList";
import { SeedDetail } from "./components/seed/SeedDetail";
import { CollectionDetail } from "./components/collections/CollectionDetail";
import { SeedForm } from "./components/seed/SeedForm";
import { CollectionForm } from "./components/collections/CollectionForm";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { SeedEditForm } from "./components/seed/SeedEditForm";
import { CollectionEditForm } from "./components/collections/CollectionEditForm";

import {
  SaveToCollectionCard,
  SelectCollectionCard,
} from "./components/SelectCollection/SelectCollectionCard";
import { SelectCollectionList } from "./components/SelectCollection/SelectCollectionList";

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  //   redirecting users to /login if isAuthenticated
  //   is false and allowing users to the route if isAuthenticated is true

  const setAuthUser = (user) => {
    sessionStorage.setItem("sown_user", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("sown_user") !== null);
  };
  return (
    <>
      <Routes>
        {/* Render the location list when http://localhost:3000/ */}
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/login"
          element={<Login setAuthUser={setAuthUser} />}
        />
        <Route exact path="/register" element={<Register />} />

        {/* Render the animal list when http://localhost:3000/animals */}

        {/* Render the animal list when http://localhost:3000/animals */}

        <Route
          exact
          path="/seeds/:seedId"
          element={
            <PrivateRoute>
              <SeedDetail />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/collections/:collectionId"
          element={
            <PrivateRoute>
              <CollectionDetail />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/seeds"
          element={
            <PrivateRoute>
              <SeedList />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/collections"
          element={
            <PrivateRoute>
              <CollectionList />
            </PrivateRoute>
          }
        />

        <Route
          path="/seeds/create"
          element={
            <PrivateRoute>
              <SeedForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/collections/create"
          element={
            <PrivateRoute>
              <CollectionForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/seeds/:seedId/edit"
          element={
            <PrivateRoute>
              <SeedEditForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/collections/:collectionId/edit"
          element={
            <PrivateRoute>
              <CollectionEditForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/userSeedCollections/:seedId/"
          element={
            <PrivateRoute>
              <SelectCollectionList />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
