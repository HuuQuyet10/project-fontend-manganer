import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from 'antd';
import DomainServer from 'src/utils/DomainServer';
import "./Login.scss";
import { LoginPage } from 'src/services/requestLogin';
import { getUsers } from 'src/redux/slices/User';
import { icon_autho, icon_firebase, icon_jwt, icon_login, icon_gg, error } from "../../resources/images";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [checkemail, setCheckemail] = useState();
  const [checkpassword, setCheckpassword] = useState();
  // if (condition) {
    
  // } else {
    
  // }
  const onChangeChecked = (e) => {
    console.log(e.target.checked)
  };
  const handleInputemail = (e) => {
    setCheckemail(e.target.value);
  };
  const handleInputpassword = (e) => {
    setCheckpassword(e.target.value);
  }
  const userState = useSelector((store) => store.user);
  const { loading, errorMessage, users } = userState;
  const handleSubmit = async () => {
    const bodyParamster = {
        'email': checkemail,
        'password': checkpassword
    }
    dispatch(getUsers(bodyParamster));
    navigate('/dashboard/app', {});
    // if(!loading) {
    //   localStorage.setItem('token--ss', users.data.token)
    // }
  }
  return (
    <div className='total__bodypage'>
      <div className='body__page__top'>
        <div className='body__page_element_logo'>
          <img src={icon_login} alt="logo" className='bodypage__icon' />
        </div>
        <div className='body__page__form'>
          <div className='form__titleSign'>
            <p>Sign in</p>
            <p>Fill in the fields below to sign into your account</p>
          </div>
          <div className='form__button_subcess'>
            <button>
              <img src={icon_gg} className='icon_button_gg'/>
              <p>Sign in with Google</p>
            </button>
          </div>
          <div className='form__or_title'>
              <div className='form__or_element'>
                <p>OR</p>
              </div>
              <hr />
          </div>
          <div className='form__or_input'>
            <input type='text' className='style__input' placeholder='Email address....' onChange={handleInputemail}/>
            <input type='password' className='style__password' placeholder='Password' onChange={handleInputpassword}/>
          </div>
          <div>
              <Checkbox onChange={onChangeChecked}>I accept the <a href='#'>terms and conditions.</a></Checkbox>
          </div>
          <div className='form__button_submist'>
            <button className='form__style_button' onClick={handleSubmit}>Sign in with your email</button>
          </div>
          <div className='form__link_signup'>
            <p>Don't have an account, yet? <a href='#'>Sign up here</a></p>
          </div>
        </div>
        <div className='form__footer_page'>
          <div className='form__box_icon_autho'>
            <div className='footer__icon_page'><img src={icon_firebase} /></div>
            <div className='footer__icon_page'><img src={icon_jwt} /></div>
            <div className='footer__icon_page'><img src={icon_autho} /></div>
          </div>
          <div className='form__box_notication_footer'>
            <div className='form__box_notication'>
                <img src={error} width={20} height={20}/>
                <p className='form__box_notication__text'>Learn how to switch between auth methods by reading the section we've prepared in the documentation <span className='box_notication_close'>X</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

