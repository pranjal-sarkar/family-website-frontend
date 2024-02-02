import React, { useEffect } from 'react';
import "./Login.css";

// importing react hooks
import { useState } from 'react';

// importing from react router
import { useNavigate, NavLink } from 'react-router-dom';

// importing custom hooks
import { useMemberAuthContext } from '../../hooks/useMemberAuthContext';

// importing components
import ContactNumberInput from '../Contact Number Input/ContactNumberInput.tsx';
import PasswordInput from '../Password Input/PasswordInput.tsx';
import LoginSubmitButton from '../Login Submit Button/LoginSubmitButton.tsx';

const Login = () => {
  const navigate = useNavigate();

  const [contactNumber, setContactNumber] = useState();
  const [password, setPassword] = useState();

  const { dispatch } = useMemberAuthContext();

  const handleChangeContact = (event) => {
    setContactNumber(event.target.value);
    console.log(contactNumber);
  }

  useEffect(() => {
    console.log("contactNumber : " + contactNumber);
    console.log("password : " + password);
  }, [contactNumber, password])

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="login-heading">
        <h1 className='display-flex'>Login</h1>
      </div>

      <div className="welcome-back-writing">
        <h1 className='display-flex'>Welcome back!</h1>
      </div>

      <div className="contact-number-input">
        <ContactNumberInput contactNumber={contactNumber} setContactNumber={setContactNumber} />
      </div>

      <div className="password-input">
        <PasswordInput password={password} setPassword={setPassword} />
      </div>

      <div className="or-register-here-link display-flex">
        <p>or
          <span>
            <NavLink to='/sign-up'>Register here</NavLink>
          </span>
        </p>
      </div>

      <div className="login-submit-button">
        <LoginSubmitButton contactNumber={contactNumber} password={password} />
      </div>
    </>
  )
}

export default Login