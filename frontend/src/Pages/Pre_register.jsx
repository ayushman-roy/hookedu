import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Pre_register = () => {
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
                        Create New Account
                    </Typography>
                    <Box component="form" sx={{ mt: 1 }}>
                        <TextField
                            variant='standard'
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            helperText="Hookedu Only accepts ashoka.edu.in email."
                            placeholder='john@ashoka.edu.in'

                        />

                        <TextField
                            variant='standard'
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"


                        />
                          




                        <Button
                            type="submit"
                            method="get"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, borderRadius: '15px' }}
                            href="http://localhost:3000/hook/check"
                        >
                            Verify Email
                        </Button>


                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
            </Container>
        </div>
    )
}

export default Pre_register