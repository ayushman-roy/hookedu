import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const verify = () => {
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h1'
            color='primary'
            sx={{
              fontSize: '50px',
              fontWeight: 500,
              Color: 'primary',
              mb: 3,
            }}
          >hookedu</Typography>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            OPT Veryfication
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>


            <TextField
              variant='standard'
              margin="normal"
              required
              fullWidth
              name="OTP"
              label="OTP"
              type="number"
            />


            <Button
              type="submit"
              method="get"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, borderRadius: '15px' }}
            >
              Resend OTP
            </Button>


          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </div>
  )
}

export default verify