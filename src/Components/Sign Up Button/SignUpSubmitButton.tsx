import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// import packages
import axios from 'axios';
import process from 'process';

// importing custom hooks
import { useMemberAuthContext } from '../../hooks/useMemberAuthContext';

// importing from react router dom
import { useNavigate, NavLink } from 'react-router-dom';

const SignUpSubmitButton = ({signUpCreds}) => {

  const { dispatch } = useMemberAuthContext();

  const navigate = useNavigate();

  const signupSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = process.env.REACT_APP_HOSTED_BACKEND_DOMAIN + '/api/v1.0.0/authentication/member-signup';

      const response = await axios.post(url, {
        "memberName": signUpCreds.name,
        "contactNumber": signUpCreds.contactNumber,
        "birthdate": signUpCreds.dateOfBirth.date,
        "birthMonth": signUpCreds.dateOfBirth.month,
        "password": signUpCreds.password
      })

      console.log("Sign Up Creds: ");
      console.log(signUpCreds.name,signUpCreds.contactNumber,signUpCreds.dateOfBirth,signUpCreds.dateOfBirth,signUpCreds.password);

      console.log("response after posting for sign up");
      console.log(response);

      // store token in local storage
      const token = response.data.token;
      const accountName = response.data.name;
      localStorage.setItem('key', token);
      localStorage.setItem('name', accountName);

      // updating global variable
      dispatch({ type: 'LOGIN', payload: token });
      console.log("After dispatch function.");

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
    <Box sx={{ '& button': { m: 1 } }}>
      <div className='display-flex'>
        <Button variant="contained" size="large" onClick={signupSubmit} >
          Sign Up
        </Button>
      </div>
    </Box>
    </>
  )
}

export default SignUpSubmitButton;