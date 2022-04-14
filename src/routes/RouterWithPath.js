import { Outlet, Navigate } from "react-router-dom";
export default function PrivateOutltet() {
    const authToken = localStorage.getItem("accessToken");
    return authToken  ? <Outlet /> : <Navigate to="/" />
  }