import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './LoginSubmitButton.css';

export default function LoginSubmitButton() {
    return (
        <Box sx={{ '& button': { m: 1 } }}>
            <div className='display-flex'>
                <Button variant="contained" size="large">
                    Login
                </Button>
            </div>
        </Box>
    );
}
