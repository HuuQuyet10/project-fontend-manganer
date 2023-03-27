import React, { useState, useEffect } from "react";
import md5 from "md5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/slices/User";
import clientUtils from "../../../utils/client-utils";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) {
      return;
    }
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    setIsSubmitting(true);
    const bodyParamster = {
      mail: email,
      password: md5(password),
    };
    dispatch(getUsers(bodyParamster)).then(() => {
      setIsSubmitting(false);
    });
  };

  const userState = useSelector((store) => store.user);

  if (userState.user.code === 200) {
    navigate("/admin");
    window.location.reload(false);
  }

  return (
    <div>
      <h1>Login</h1>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </label>
      {error && <div>{error}</div>}
      <button onClick={handleSubmit}>Log in</button>
    </div>
  );
};

export default Login;
