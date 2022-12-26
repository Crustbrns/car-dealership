import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { width: '100%',
                color: '#005399',
                border: 0,
                borderBlockColor: 'green' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Nickname or email" variant="outlined" />
            {/* <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        </Box>
    );
}