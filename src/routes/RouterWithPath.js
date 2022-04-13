import { Outlet, Navigate } from "react-router-dom";
export default function PrivateOutltet() {
    const authToken = localStorage.getItem("accsessToken");
    return authToken  ? <Outlet /> : <Navigate to="/" />
  }