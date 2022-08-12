import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Select from "@mui/material/Select";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
// import IconButton from '@mui/material/IconButton';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function Register() {
  const navigate = useNavigate();

  const [stage, setStage] = useState("pre_reg");
  const [batch, setbatch] = useState("");
  // custom gender checkbox
  const [checked, setChecked] = useState(false);

  const post_pre_reg_data = async (e) => {
    e.preventDefault();
    const form = e.target;
    const user_data = {
      email: form.email.value,
      password: form.password.value,
    };
    const res = await fetch("", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user_data),
    });
    const response = await res.json();
    const { msg, success } = response;
    if (success) {
      setStage("verify_otp");
      e.target.reset();
    } else {
      console.log(msg);
    }
  };

  const post_verify_otp_data = async (e) => {
    e.preventDefault();
    const form = e.target;
    const user_data = {
      otp: form.otp.value,
    };
    const res = await fetch("/hook/check", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user_data),
    });
    const response = await res.json();
    const { msg, success } = response;
    if (success) {
      setStage("reg_data");
      e.target.reset();
    } else {
      console.log(msg);
    }
  };

  const post_reg_data = async (e) => {
    e.preventDefault();
    const form = e.target;
    const user_data = {
      name: form.name.value,
      age: form.age.value,
      gender: form.gender.value,
      interest: form.interest.value,
      school: form.school.value,
      batch: form.batch.value,
      bio: form.bio.value,
    };
    const res = await fetch("/hook/data", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user_data),
    });
    const response = await res.json();
    const { msg, success, otp_verify } = response;
    if (success) {
      navigate("/feed");
    } else if (!otp_verify) {
      e.target.reset();
      setStage("verify_otp");
      console.log(msg);
    } else {
      console.log(msg);
    }
  };

  async function resend_otp_button() {
    const res = await fetch("/hook/resend_otp", { method: "GET" });
    const { msg } = await res.json();
    console.log(msg);
    document.getElementById("btn-disable").disabled = true;
    setTimeout(function () {
      document.getElementById("btn-disable").disabled = false;
    }, 30000);
  }

  if (stage === "reg_data") {
    return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              color="primary"
              sx={{
                fontSize: "50px",
                fontWeight: 500,
                Color: "primary",
                mb: 3,
                fontFamily: "poppins",
              }}
            >
              hookedu
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create new account
            </Typography>
            <form onSubmit={(e) => post_reg_data(e)} sx={{ mt: 1 }}>
              <TextField
                label="Name"
                variant="standard"
                name="name"
                required
                fullWidth
                sx={{
                  m: 1,
                }}
              ></TextField>
              <TextField
                label="Age"
                name="age"
                type="number"
                variant="standard"
                required
                inputProps={{ min: 16, max: 30 }}
                min="1"
                max="90"
                fullWidth
                sx={{
                  m: 1,
                }}
              ></TextField>

              <InputLabel
                required
                sx={{
                  m: 1,
                }}
              >
                Gender
              </InputLabel>
              <RadioGroup
                name="gender"
                fullwidth
                row
                sx={{
                  m: 1,
                }}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  name="gender"
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  name="gender"
                  label="Male"
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={checked}
                      onClick={() => setChecked(!checked)}
                      value="other"
                      label="other"
                    />
                  }
                  label={
                    checked ? (
                      <TextField
                        required
                        fullWidth
                        variant="standard"
                        name="gender"
                        // disabled={!checked}
                        label="Custom"
                        // onKeyDown={(e) => setOtherInfo(e.target.value)}
                        sx={{
                          m: 1,
                        }}
                      />
                    ) : (
                      "Custom"
                    )
                  }
                />
              </RadioGroup>

              <InputLabel
                required
                sx={{
                  m: 1,
                }}
              >
                Interested in?
              </InputLabel>
              <RadioGroup
                name="interest"
                row
                sx={{
                  m: 1,
                }}
              >
                <FormControlLabel
                  value="Women"
                  control={<Radio />}
                  label="Women"
                  name="interest"
                />
                <FormControlLabel
                  value="Men"
                  name="interest"
                  control={<Radio />}
                  label="Men"
                />
                <FormControlLabel
                  value="Everyone"
                  control={<Radio />}
                  label="Everyone"
                  name="interest"
                />
              </RadioGroup>
              <TextField
                name="school"
                fullWidth
                label="School"
                defaultValue="Ashoka University"
                type="text"
                required
                variant="standard"
                helperText="Hookedu Is Exclusively Developed For Ashoka University  Only"
                InputProps={{
                  readOnly: true,
                }}
                sx={{
                  m: 1,
                  fontWeight: 500,
                }}
              ></TextField>
              <InputLabel
                sx={{
                  m: 1,
                }}
              >
                Batch
              </InputLabel>

              <Select
                name="batch"
                required
                fullWidth
                variant="standard"
                label="Batch"
                value={batch}
                onChange={(e) => setbatch(e.target.value)}
                sx={{
                  m: 1,
                }}
              >
                <MenuItem value={1}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"UG 2022"}>UG 2022</MenuItem>
                <MenuItem value={"UG 2023"}>UG 2023</MenuItem>
                <MenuItem value={"UG 2024"}>UG 2024</MenuItem>
                <MenuItem value={"UG 2025"}>UG 2025</MenuItem>
                <MenuItem value={"ASP"}>ASP</MenuItem>
                <MenuItem value={"MA"}>MA</MenuItem>
                <MenuItem value={"MLS"}>MLS</MenuItem>
                <MenuItem value={"PHD"}>PHD</MenuItem>
                <MenuItem value={"Faculty"}>Faculty</MenuItem>
              </Select>

              <TextField
                name="bio"
                required
                fullWidth
                label="Bio"
                multiline
                rows={4}
                variant="standard"
                sx={{
                  m: 1,
                }}
              ></TextField>

              {/* <InputLabel
                required
                sx={{
                  m: 1,
                }}
              >
                Profile Picture
              </InputLabel>
              <IconButton
                color="primary"
                aria-label="upload picture"
                size="large"
                component="label"
                sx={{
                  m: 1,
                }}
              >
                <input required hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton> */}

              <Button
                onSubmit={(e) => post_reg_data(e)}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: "15px" }}
              >
                Sign In
              </Button>

              <Grid container>
                <Grid item>
                  <Link href="http://localhost:3000/" variant="body2">
                    {"Already have an account? Sign in"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
      </>
    );
  }
  // TODO: resend_otp() => afterClick => disable button for 60s
  else if (stage === "verify_otp") {
    return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              color="primary"
              sx={{
                fontSize: "50px",
                fontWeight: 500,
                Color: "primary",
                mb: 3,
              }}
            >
              hookedu
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              OTP Verification
            </Typography>
            <form onSubmit={(e) => post_verify_otp_data(e)} sx={{ mt: 1 }}>
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="otp"
                label="OTP"
                type="number"
              />

              <Button
                type="submit"
                method="get"
                fullWidth
                variant="contained"
                sx={{ mt: 3, borderRadius: "15px" }}
              >
                Verify
              </Button>
              <Button
                onClick={(e) => resend_otp_button()}
                type="button"
                fullWidth
                variant="contained"
                id="btn-disable"
                sx={{ mt: 3, mb: 2, borderRadius: "15px" }}
              >
                Resend OTP
              </Button>
            </form>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h1"
              color="primary"
              sx={{
                fontSize: "50px",
                fontWeight: 500,
                Color: "primary",
                mb: 3,
              }}
            >
              hookedu
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create New Account
            </Typography>
            <form onSubmit={(e) => post_pre_reg_data(e)} sx={{ mt: 1 }}>
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                helperText="Hookedu Only accepts ashoka.edu.in email."
                placeholder="john@ashoka.edu.in"
              />

              <TextField
                variant="standard"
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
                sx={{ mt: 3, mb: 2, borderRadius: "15px" }}
                onSubmit={(e) => post_pre_reg_data(e)}
              >
                Verify Email
              </Button>
            </form>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </>
    );
  }
}
