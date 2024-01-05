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
      console.log(typeof(process.env.REACT_APP_HOSTED_BACKEND_DOMAIN));

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
      <div className="login-components">
        <h1>LOGIN</h1>
        <div className="form-tag">
          <form>
            <div className="contact-input">
              <input type="number" placeholder='Enter Your Contact Number' onChange={handleChangeContact} />
            </div>

            <div className="password-input">
              <input type="password" placeholder='Enter Your Password' onChange={handleChangePassword} />
            </div>

            <div className="login-submit-button">
              <p><NavLink to="/sign-up">Or Click to Register</NavLink> </p>
              <button type="submit" onClick={loginSubmit}>LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login