import React from 'react' ;
import '.CSS/registration.css' ;
import TextField from '@mui/material/TextField' ;
import RadioGroup from '@mui/material/RadioGroup' ;
import FormControlLabel from '@mui/material/FormControlLabel' ;
import Radio from '@mui/material/Radio' ;
import Typography from '@mui/material/Typography' ;
import Button from '@mui/material/Button' ;
import MenuItem from '@mui/material/MenuItem' ;
import InputLabel from '@mui/material/InputLabel' ;
import Select, { SelectChangeEvent } from '@mui/material/Select' ;


const Mui = () => {
  
  return (
    <div>
      <div className="container-reg">
        <div className="header-wrap-reg">

        <h1 className="headding-reg">hookedu</h1>
          <div className="subheadding-reg">Create New Account</div>

        </div>
        <div className="form-container-reg">
          <form className='main-form-reg'>
            <TextField label="Name" variant="standard"
              sx={{
                m: 1
              }}
            ></TextField>
            <TextField label="Email" type='email' variant="standard"
              sx={{
                m: 1
              }}
            ></TextField>
            <TextField label="Password" type='password' variant="standard"
              sx={{
                m: 1
              }}
            ></TextField>
            <TextField label="Confirm Password" type='password' variant="standard"
              sx={{
                m: 1
              }}
            ></TextField>
            <TextField label="Age" type='number' variant="standard"
              sx={{
                m: 1
              }}
            ></TextField>
            <InputLabel
              sx={{
                m: 1
              }}
            >Gender</InputLabel>
            <RadioGroup
              row
              name="radio-buttons-group"
              sx={{
                m: 1
              }}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            <InputLabel
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
              <FormControlLabel value="Girls" control={<Radio />} label="Girls" />
              <FormControlLabel value="Boys" control={<Radio />} label="Boys" />
              <FormControlLabel value="Both" control={<Radio />} label="Both" />
            </RadioGroup>
            <TextField label="School" defaultValue='Ashoka University' type='text' variant="standard" helperText="Hookedu Is Exclusively Developed For Ashoka University Students Only"
            InputProps={{
              readOnly: true,
            }}
              sx={{
                m: 1
              }}
            ></TextField>
            <InputLabel 
                          sx={{
                            m: 1
                          }}
            >Batch</InputLabel>
            
            <Select
              variant='standard'
              label="Batch"
              sx={{
                m: 1
              }}
            >
              <MenuItem>2022</MenuItem>
              <MenuItem>2023</MenuItem>
              <MenuItem>2024</MenuItem>
              <MenuItem>2025</MenuItem>
              <MenuItem>2026</MenuItem>
              <MenuItem>2027</MenuItem>
            </Select>
  
            <Button variant="contained" size="medium"
              sx={{
                m: 1,
                mt:5
              }}
            >Submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Mui