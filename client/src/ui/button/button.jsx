import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    return (
        <Stack spacing={2} direction="row" sx={{
            '& > :not(style)': {
                width: '100%',
                backgroundColor: '#111111',
                color: '#f6f6f6',
                fontFamily: 'Closer-R',
                padding: '12px',
                fontSize: '14px',
                textTransform: 'none',
                ":hover":{
                    backgroundColor: '#2d3038'
                }
            }
        }}>
            
            <Button variant="contained"
                disableElevation>Continue</Button>
        </Stack>
    );
}