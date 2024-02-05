import React, { useEffect } from 'react'

// import react hooks
import { useState } from 'react';

// importing hooks
import { useMemberAuthContext } from '../../hooks/useMemberAuthContext';

// importing components
import ContactNumberInput from '../../Components/Contact Number Input/ContactNumberInput.tsx';
import PasswordInput from '../../Components/Password Input/PasswordInput.tsx';
import SignUpSubmitButton from '../../Components/Sign Up Button/SignUpSubmitButton.tsx';
import NameInputSignUp from '../../Components/Name Input Sign Up/NameInputSignUp.tsx';
import DatePickerComponent from '../../Components/Date Picker Component/DatePickerComponent.tsx';

// importing stylesheet
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [password, setPassword] = useState();
  const [signUpCreds, setSignUpCreds] = useState();

  useEffect(() => {
    setSignUpCreds({
      name,
      contactNumber,
      dateOfBirth,
      password
    })
  }, [name, contactNumber, dateOfBirth, password]);

  return (
    <>
      <div className="signup-heading">
        <h1>Sign Up</h1>
      </div>

      <div className="signup-slogan">
        <h1 className='display-flex'>Join the movement today!</h1>
      </div>

      <div className="name-input">
        <NameInputSignUp name={name} setName={setName} />
      </div>

      <div className="contact-number-input">
        <ContactNumberInput contactNumber={contactNumber} setContactNumber={setContactNumber} />
      </div>

      <div className="dob-input">
        <DatePickerComponent dateOfBirth={dateOfBirth} setDateOfBirth={setDateOfBirth} />
      </div>

      <div className="password-input">
        <PasswordInput password={password} setPassword={setPassword} />
      </div>

      <div className="login-submit-button">
        <SignUpSubmitButton signUpCreds={signUpCreds} />
      </div>
    </>
  )
}

export default SignUp;