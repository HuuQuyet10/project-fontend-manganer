import React from 'react';
import { useNavigate } from "react-router-dom";
const Admins = () => {
    let navigate = useNavigate();
    const logoutPage = () => {
        localStorage.removeItem("accsessToken");
        navigate("/");
    }
    return (
        <div>
            <h1>admin</h1>
            <button onClick={logoutPage}>Logout</button>
        </div>
    );
}

export default Admins;
