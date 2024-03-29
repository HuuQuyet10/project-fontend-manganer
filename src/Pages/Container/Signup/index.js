import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../../redux/slices/User";

const Signup = () => {
  const dispatch = useDispatch();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const [userName, setUserName] = useState();


  const checkMail = (e) => {
    setMail(e.target.value);
  };

  const checkPass = (e) => {
    setPass(e.target.value);
  };

  const checkUsername = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = () => {
    const bodyParamster = {
      mail: mail,
      password: pass,
      user: userName,
    };
    dispatch(signUpUser(bodyParamster));
  };

  return (
    <div>
      <h1>Sign up</h1>
      <input placeholder="username" type="text" onChange={checkUsername} />
      <input placeholder="passs" type="text" onChange={checkPass} />
      <input placeholder="mail" type="text" onChange={checkMail} />
      <button onClick={handleSubmit}>sign up</button>
    </div>
  );
};

export default Signup;
