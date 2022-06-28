import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import clientUtils from '../../utils/client-utils';
const Admins = () => {
    let navigate = useNavigate();
    const logoutPage = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshtoken");
        navigate("/");
    }
    const states = useSelector((store) => store);
    console.log(states, "kkkkkkkk")
    return (
        <div>
            <h1>admin</h1>
            <button onClick={logoutPage}>Logout</button>
        </div>
    );
}

export default Admins;
