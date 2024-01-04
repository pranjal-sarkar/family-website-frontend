import React from 'react'
import "./SignUp.css";

// import react hooks
import { useState } from 'react';

// import packages
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [birthdate, setBirthdate] = useState();
  const [birthmonth, setBirthmonth] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleChangeName = (event) => {
    setName(event.target.value);
    console.log(name);
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

    console.log(name);

    try {
      console.log("Hello");
      console.log(name)
      console.log(contactNumber)
      console.log(birthdate)
      console.log(birthmonth)
      console.log(password)

      // const response = await axios.post("http://127.0.0.1:8000/api/v1.0.0/authentication/member-signup", {
      const response = await axios.post("https://ekata-backend.onrender.com/api/v1.0.0/authentication/member-signup", {
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

      navigate("/");
    } catch (error) {
      console.log("There was some error adding your Name to the Database");
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
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp;