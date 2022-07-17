import React, { Component } from 'react'
import TextField from '@mui/material/TextField' ;
import Box from '@mui/material/Box' ;
import FormControlLabel from '@mui/material/FormControlLabel' ;
import Radio from '@mui/material/Radio' ;
import Typography from '@mui/material/Typography' ;
import Button from '@mui/material/Button' ;
import Link from '@mui/material/Link' ;
import InputLabel from '@mui/material/InputLabel' ;
import Select, { SelectChangeEvent } from '@mui/material/Select' ;
export class Login extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="container">
            <Box component='div' 
            sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                m:'auto',
                textAlign:'center',
                fontFamily:'cursive'
            }}
            >
            <Typography variant='h2'
            sx={{
                mt:4,
                p:2,
                color:'#a70e13'
            }}
            >hookedu</Typography>
            <Typography variant='h5'>Login</Typography>
            </Box>
            
            
            <Box component='div'
            sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                p: '20px'

            }}
            >
                <Box  component='form'
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                }}
                >
                <TextField label="Email" type='email' variant="standard" sx={{m:1}} />
                <TextField label="Password" type='password' variant="standard" sx={{m:1}} />
                <Button variant='contained' size='medium' sx={{ m:1, mt:3,}} >Log in</Button>
                </Box>
                <Link href="mui.jsx" sx={{p:1}} >Forgot Password</Link>
                <Link href="#"  sx={{p:1, pt:0.5}}>Do Not Have An Account? Sign up</Link>
            </Box>
            
        </div>
    </div>
      </div>
    )
  }
}

export default Login