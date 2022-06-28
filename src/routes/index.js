import React from "react";
import { Routes, Route, useNavigate, Outlet, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import UsersPage from "../Pages/Users";
import PrivateOutltet from "../routes/RouterWithPath";
import Admins from "../Pages/Admins";
import PageNotFound from "../Pages/PageNotFound";
import Signup from "../Pages/Signup";


const Routers = () => {
  return (
    <Routes>
      {/* router public */}
      <Route  path="/" element={<Login />} />
      <Route  path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup /> } />

      {/* router private  */}
      <Route element={<PrivateOutltet />}>
        <Route path="user-details" element={<UsersPage />} />
      </Route>
      <Route element={<PrivateOutltet />}>
        <Route path="dashboard" element={<Admins />} />
      </Route>
      <Route element={<PrivateOutltet />}>
        <Route path="admin" element={<Admins />} />
      </Route>


      {/* page not found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Routers;
