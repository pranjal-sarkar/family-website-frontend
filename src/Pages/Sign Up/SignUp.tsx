import React from 'react'
import "./SignUp.css";

// import react hooks
import { useState } from 'react';

// import packages
import axios from 'axios';
import process from 'process';

// importing from react router dom
import { useNavigate, NavLink } from 'react-router-dom';

// importing hooks
import { useMemberAuthContext } from '../../hooks/useMemberAuthContext';

const SignUp = () => {
  const [name, setName] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [birthdate, setBirthdate] = useState();
  const [birthmonth, setBirthmonth] = useState();
  const [password, setPassword] = useState();

  const { dispatch } = useMemberAuthContext();

  const navigate = useNavigate();

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeContact = (event) => {
    setContactNumber(event.target.value);
  }

  const handleChangeBirthdate = (event) => {
    setBirthdate(event.target.value);
  }

  const handleChangeBirthmonth = (event) => {
    setBirthmonth(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const signupSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = process.env.REACT_APP_HOSTED_BACKEND_DOMAIN + '/api/v1.0.0/authentication/member-signup';
      
      const response = await axios.post(url, {
        "memberName": name,
        "contactNumber": contactNumber,
        "birthdate": birthdate,
        "birthMonth": birthmonth,
        "password": password
      })

      console.log("response after posting for sign up");
      console.log(response);

      // store token in local storage
      const token = response.data.token;
      const accountName = response.data.name;
      localStorage.setItem('key', token);
      localStorage.setItem('name', accountName);

      // updating global variable
      dispatch({ type: 'LOGIN', payload: token });

      alert("Thank You For Signing Up");
      
      // reroute to home page
      navigate("/");
    } catch (error) {
      console.log("There was some error adding your Name to the Database");
      alert("There was some error adding your Name to the Database");
    }
  }

  return (
    <>
      <div className="login-components">
        <h1>Sign Up</h1>
        <div className="form-tag">
          <form>
            <div className="name-input">
              <input type="text" placeholder='Enter Your Name' onChange={handleChangeName} />
            </div>

            <div className="contact-input">
              <input type="number" placeholder='Enter Your Contact Number' onChange={handleChangeContact} />
            </div>

            <div className="birthdate-input">
              <input type="number" placeholder='Enter Your Birth Date' onChange={handleChangeBirthdate} />
            </div>

            <div className="birtmonth-input">
              <input type="number" placeholder='Enter Your Birth Month' onChange={handleChangeBirthmonth} />
            </div>

            <div className="password-input">
              <input type="password" placeholder='Enter Your Password' onChange={handleChangePassword} />
            </div>

            <div className="signup-submit-button">
              <button type="submit" onClick={signupSubmit}>SIGN UP</button>
            </div>

            <div className="or-click-to-login">
              <NavLink to="/login">Or Click to Login</NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;