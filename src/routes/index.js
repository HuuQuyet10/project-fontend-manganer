import React from "react";
import { Routes, Route, useNavigate, Outlet, Navigate } from "react-router-dom";
import Login from "../Pages/Container/Login";
import UsersPage from "../Pages/Container/Users";
import PrivateOutltet from "../routes/RouterWithPath";
import PageNotFound from "../Pages/Container/PageNotFound";
import Signup from "../Pages/Container/Signup";
import listRouters from "./listRouters";

const Routers = () => {
  console.log(listRouters)
  return (
    <Routes>
      {/* router public */}
      {/* <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> */}

      {/* <Route element={<PrivateOutltet />}>
        <Route path="/user-details" element={<UsersPage />} />
      </Route> */}
      {/* <Route element={<PrivateOutltet />}>
        <Route path="/dashboard" element={<Admins />} />
      </Route> */}

      {/* page not found */}
      {/* <Route path="*" element={<PageNotFound />} /> */}
      {
        listRouters.map((item, index) => {
          if (item.public === false) {
            return (
              <Route key={item.urlpath} element={<PrivateOutltet />}>
                {item.submenu && item.submenu.length > 0 ? (
                  item.submenu.map((subItem, subIndex) => (
                    <Route key={subItem.urlpath} path={subItem.urlpath} element={<subItem.component />} />
                  ))
                ) : (
                  <Route path={item.urlpath} element={<item.component />} />
                )}
              </Route>
            );
          } else {
            return (
              <Route key={item.urlpath} path={item.urlpath} element={<item.component />} />
            );
          }
        })
      }


    </Routes>
  );
};

export default Routers;
