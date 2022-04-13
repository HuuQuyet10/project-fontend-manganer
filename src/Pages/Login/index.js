import React from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    const btco = () => {
        localStorage.setItem("accsessToken", "kkkkkkkkkkkkkk");
        navigate('/dashboard');
    }
    return (
        <div>
            <h1>login</h1>
            <button onClick={btco}>click login</button>
        </div>
    );
}

export default Login;
