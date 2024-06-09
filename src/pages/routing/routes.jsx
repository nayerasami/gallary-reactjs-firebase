import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRouting from "./ProtectedRouting";

const Home = lazy(() => import("../Home"));
const Favorite = lazy(() => import("../Favorite"));
const Settings = lazy(() => import("../Settings"));
const Profile = lazy(() => import("../Profile"));
const NotFound = lazy(() => import("../NotFound"));
const Register = lazy(() => import("../Register"));
const Signin = lazy(() => import("../Signin"));

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/login" element={<Signin />} />
        <Route
          path="/settings"
          element={
            <ProtectedRouting>
              <Settings />
            </ProtectedRouting>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRouting>
              <Profile />
            </ProtectedRouting>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
