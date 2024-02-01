import React from 'react';
import "./Login.css";

// importing react hooks
import { useState } from 'react';

// importing packages
import axios from 'axios';
import process from 'process';

// importing from react router
import { useNavigate, NavLink } from 'react-router-dom';

// importing custom hooks
import { useMemberAuthContext } from '../../hooks/useMemberAuthContext';

// importing images
import src from '../../Assets/DadaWriting.jpeg';

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
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const loginSubmit = async (event) => {
    event.preventDefault();

    try {
      const params = {
        "contactNumber": contactNumber,
        "password": password
      }

      console.log("process.env.HOSTED_BACKEND_DOMAIN: ");
      console.log(process.env.REACT_APP_HOSTED_BACKEND_DOMAIN);
      console.log(typeof (process.env.REACT_APP_HOSTED_BACKEND_DOMAIN));

      const url = process.env.REACT_APP_HOSTED_BACKEND_DOMAIN + '/api/v1.0.0/authentication/member-login';

      const response = await axios.post(url, params);

      // storing JWT Token in local storage
      localStorage.setItem('key', response.data.token);
      localStorage.setItem('name', response.data.name);

      if (response.data.data === "Successful Login") {
        // updating global variable
        dispatch({ type: 'LOGIN', payload: response.data.token })

        alert("Login Successful");

        navigate("/");
      }
      else if (response.data.data === "Family Member With This Phone Number Not Found. Please Sign Up") {
        alert("Please Register before using the app.");
      }


    } catch (error) {
      // alert("There was some problem with the Login");
      console.log(error.response.data.data);
      alert(error.response.data.data);
    }
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
        <ContactNumberInput />
      </div>

      <div className="password-input">
        <PasswordInput />
      </div>

      <div className="or-register-here-link display-flex">
        <p>or <span>Register here</span></p>
      </div>

      <div className="login-submit-button">
        <LoginSubmitButton />
      </div>
    </>
  )
}

export default Login