import React, { useState, useEffect } from "react";
import md5 from "md5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/slices/User";
import clientUtils from "../../../utils/client-utils";
import "../../../Styles/Login.css"

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
    <div className="content-form">
      <div class="form">
        <div class="header">Sign In</div>
        <div class="inputs">
          <input
            placeholder="Email"
            class="input"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <input
            placeholder="Password"
            class="input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div class="checkbox-container">
            <label class="checkbox">
              <input type="checkbox" id="checkbox" />
            </label>
            <label for="checkbox" class="checkbox-text">Remember me</label>
          </div>
          {error && <div>{error}</div>}
          <div class="account-test">
            <p>Email: mail01@gmail.com</p>
            <p>/</p>
            <p>Pass: 12345</p>
          </div>
          <button class="sigin-btn" onClick={handleSubmit}>Submit</button>
          <a class="forget" href="#">Forget password ?</a>
          <p class="signup-link">Don't have an account? <a href="#">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
