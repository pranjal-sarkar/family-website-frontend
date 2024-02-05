import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function NameInputSignUp({name, setName}) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='display-flex'>
                <TextField
                    id="outlined-password-input"
                    label="Name"
                    type="text"
                    autoComplete="current-password"
                    onChange={(event)=>{
                        setName(event.target.value);
                    }}
                />
            </div>
        </Box>
    );
}
