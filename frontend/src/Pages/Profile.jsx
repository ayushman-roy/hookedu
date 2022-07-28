import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';

const Profile = () => {
  return (
    <>
    <Container>
        <Box
        sx={{
            display:'flex',
            flexDirection:'coloumn',
            alignItem : 'center'

        }}
        >
            <Typography variant='div'
            sx={{
                border:'solid balck 1px',
                borderRadius:'100px'
            }}
            >
                <img src="https://avatars.githubusercontent.com/u/77292095?v=4" alt="" /> 
            </Typography>
        </Box>
    </Container>
    </>
  )
}

export default Profile