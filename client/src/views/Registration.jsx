import React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
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

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function Registration() {
//  Setting minimum and maximum age 
    const min = 16;
    const max = 90;

    // For custom gender
    const [checked, setChecked] = useState(false);

    //  For Drop down input   
    const [batch, setbatch] = React.useState('');
    //  This is not an error , its appearing due to a default extension in vs code.
    const handleChange = (event) => {
        setbatch(event.target.value);
    };

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
                            fontFamily: 'poppins',
                        }}
                    >hookedu</Typography>
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create new account
                    </Typography>
                    <Box component="form" sx={{ mt: 1 }}>
                        <TextField label="Name" variant="standard" required fullWidth
                            sx={{

                                m: 1
                            }}
                        ></TextField>
                        <TextField label="Age" type='number' variant="standard" required
                        inputProps={{ min, max }}
                        min="1" max='90'
                            fullWidth
                            sx={{

                                m: 1,

                            }}
                        ></TextField>

                        <InputLabel required
                            sx={{

                                m: 1
                            }}
                        >Gender</InputLabel>
                        <RadioGroup
                            fullwidth
                            row
                            name="radio-buttons-group"
                            sx={{

                                m: 1
                            }}
                        >
                            <FormControlLabel value="Female" control={<Radio />} label="Female" />
                            <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={checked}
                                        onClick={() => setChecked(!checked)}
                                        value="other"
                                        label='other' />
                                }
                                label={
                                    checked ?
                                        <TextField
                                        required
                                        fullWidth
                                            variant='standard' 
                                            // disabled={!checked}
                                            label="Custom"
                                            // onKeyDown={(e) => setOtherInfo(e.target.value)}
                                            sx={{

                                                m: 1
                                            }} 
                                            />
                                        : 'Custom'
                                } />
                        </RadioGroup>


                        


                        <InputLabel required
                            sx={{

                                m: 1
                            }}
                        >Interested in?</InputLabel>
                        <RadioGroup
                            row
                            name="radio-buttons-group"
                            sx={{

                                m: 1
                            }}
                        >
                            <FormControlLabel value="Women" control={<Radio />} label="Women" />
                            <FormControlLabel value="Mens" control={<Radio />} label="Men" />
                            <FormControlLabel value="Everyone" control={<Radio />} label="Everyone" />
                        </RadioGroup>
                        <TextField fullWidth label="School" defaultValue='Ashoka University' type='text' required variant="standard" helperText="Hookedu Is Exclusively Developed For Ashoka University  Only"
                            InputProps={{
                                readOnly: true,
                            }}
                            sx={{

                                m: 1,
                                fontWeight: 500
                            }}
                        ></TextField>
                        <InputLabel
                            sx={{

                                m: 1
                            }}
                        >Batch</InputLabel>

                        <Select
                            required
                            fullWidth
                            variant='standard'
                            label="Batch"
                            value={batch}
                            onChange={handleChange}
                            sx={{

                                m: 1
                            }}
                        >

                            <MenuItem value={1}><em>None</em></MenuItem>
                            <MenuItem value={'UG 2022'}>UG 2022</MenuItem>
                            <MenuItem value={20}>UG 2023</MenuItem>
                            <MenuItem value={30}>UG 2024</MenuItem>
                            <MenuItem value={40}>UG 2025</MenuItem>
                            <MenuItem value={50}>ASP</MenuItem>
                            <MenuItem value={60}>MA</MenuItem>
                            <MenuItem value={70}>MLS</MenuItem>
                            <MenuItem value={80}>PHD</MenuItem>
                            <MenuItem value={90}>Faculty</MenuItem>
                        </Select>



                        <TextField required fullWidth
                            label="Bio"
                            multiline
                            rows={4}
                            variant="standard"
                            sx={{

                                m: 1
                            }}
                        ></TextField>


                        <InputLabel required
                            sx={{

                                m: 1
                            }}
                        >Profile Picture</InputLabel>
                        <IconButton color="primary" aria-label="upload picture" size='large' component="label"
                            sx={{

                                m: 1
                            }}
                        >
                            <input required hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, borderRadius: '15px' }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="http://localhost:3000/" variant="body2">
                                    {"Already have an account? Sign in"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}