import React, { useState, useEffect } from "react";
import md5 from "md5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/slices/User";
import clientUtils from "../../../utils/client-utils";

const Login = () => {
  const dispatch = useDispatch();
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  let navigate = useNavigate();
  const checkMail = (e) => {
    setMail(e.target.value);
  };
  const checkPass = (e) => {
    setPass(e.target.value);
  };
  const hanldleSubmit = async () => {
    const bodyParamster = {
      mail: mail,
      password: md5(pass),
    };
    dispatch(getUsers(bodyParamster));
  };
  const userState = useSelector((store) => store.user);
  if (userState.user.code === 200) {
    navigate("/admin");
  }
  useEffect(() => {
    if (clientUtils.auth) {
      navigate("/admin");
    }
  }, []);
  return (
    <div>
      <h1>login</h1>
      <label>Mail</label>
      <input type="text" onChange={checkMail} />
      <label>Password</label>
      <input type="text" onChange={checkPass} />
      <button onClick={hanldleSubmit}>click login</button>
    </div>
  );
};

export default Login;
