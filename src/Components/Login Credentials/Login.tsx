import React from 'react';
import "./Login.css";

// importing react hooks
import { useState } from 'react';

// importing packages
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [contactNumber, setContactNumber] = useState();
  const [password, setPassword] = useState();

  const handleChangeContact = (event) => {
    setContactNumber(event.target.value);
    console.log(contactNumber);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  }

  const loginSubmit = async (event) => {
    event.preventDefault();

    // console.log("first");
    // navigate("/");

    try {
      console.log(contactNumber);
      console.log(password);

      const params = {
        "contactNumber" : contactNumber,
        "password": password
      }

      const response = await axios.post("https://ekata-backend.onrender.com/api/v1.0.0/authentication/member-login", params);
      // const response = await axios.post("http://localhost:8000/api/v1.0.0/authentication/member-login", params);

      console.log(response);

      // storing JWT Token in local storage
      localStorage.setItem('key', response.data.token);
      localStorage.setItem('name', response.data.name);

      if(response.data.data === "Successful Login"){
        console.log("In the function to navigate(1)");
        navigate("/");
        console.log("In the function to navigate(2)");
      }


    } catch (error) {
      alert("There was some problem with the Login");
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
              <button type="submit" onClick={loginSubmit}>LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login