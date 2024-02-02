import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './LoginSubmitButton.css';
import { useNavigate } from 'react-router-dom';

// importing packages
import axios from 'axios';
import process from 'process';
import { useMemberAuthContext } from '../../hooks/useMemberAuthContext';

export default function LoginSubmitButton({contactNumber, password}) {
    const navigate = useNavigate();

    const { dispatch } = useMemberAuthContext();

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
        <Box sx={{ '& button': { m: 1 } }}>
            <div className='display-flex'>
                <Button variant="contained" size="large" onClick={loginSubmit}>
                    Login
                </Button>
            </div>
        </Box>
    );
}
