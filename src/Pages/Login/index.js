import React, { useState } from 'react';
import md5 from 'md5';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from "../../redux/slices/User";

const Login = () => {
    const dispatch = useDispatch();
    const [mail, setMail] = useState();
    const [pass, setPass] = useState();
    let navigate = useNavigate();
    const checkMail = (e) => {
        setMail(e.target.value)
    }
    const checkPass = (e) => {
        setPass(e.target.value)
    }
    const userState = useSelector((store) => store.user);
    const hanldleSubmit = async () => {
        const bodyParamster = {
            'mail': mail,
            'password': md5(pass)
        };
        dispatch(getUsers(bodyParamster));
        if (userState.users.code === 200) {
            navigate("/dashboard")
        } else {
            console.log(userState.users.message)
        }
    }
    return (
        <div>
            <h1>login</h1>
                <label>Mail</label>
                <input type="text" onChange={checkMail}/>
                <label>Password</label>
                <input type="text" onChange={checkPass}/>
                <button onClick={hanldleSubmit}>click login</button>
        </div>
    );
}

export default Login;
