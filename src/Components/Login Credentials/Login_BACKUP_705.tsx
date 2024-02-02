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

<<<<<<< HEAD
  const loginSubmit = async (event) => {
    event.preventDefault();

    try {
      const params = {
        "contactNumber": contactNumber,
        "password": password
      }

      console.log("process.env.HOSTED_BACKEND_DOMAIN: ");
      console.log(process.env.REACT_APP_HOSTED_BACKEND_DOMAIN);
      console.log(typeof(process.env.REACT_APP_HOSTED_BACKEND_DOMAIN));

      const url = process.env.REACT_APP_HOSTED_BACKEND_DOMAIN + '/api/v1.0.0/authentication/member-login';
      // const url = 'http://localhost:8000' + '/api/v1.0.0/authentication/member-login';

      const response = await axios.post(url, params);

      // storing JWT Token in local storage
      localStorage.setItem('key', response.data.token);
      localStorage.setItem('name', response.data.name);

      if (response.data.data === "Successful Login") {
        // updating global variable
        dispatch({ type: 'LOGIN', payload: response.data.token })
=======
  return (
    <>
      <div className="login-heading">
        <h1 className='display-flex'>Login</h1>
      </div>
>>>>>>> login-style

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