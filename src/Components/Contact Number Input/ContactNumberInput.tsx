import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './ContactNumberInput.css';

export default function ContactNumberInput() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='text-field-contact-number-input'>
        <TextField
          id="outlined-password-input"
          label="Contact Number"
          type="number"
          autoComplete="current-password"
        />
      </div>
    </Box>
  );
}