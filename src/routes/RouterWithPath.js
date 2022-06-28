import { Outlet, Navigate, useLocation  } from "react-router-dom";
export default function PrivateOutltet() {
  const location = useLocation();
    const authToken = localStorage.getItem("accessToken");
    return authToken  ? <Outlet /> : <Navigate state={{
      from: location.pathname,
    }} to="/login" />
  }