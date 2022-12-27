import React from "react";
import { useState } from "react";
import UserProfile from "./User_Profile";
import "../components/feed/Feed.css";
//  Mui Imports
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";

export default function UserMatch() {
  const [value, setValue] = React.useState([]);

  const [batch, setbatch] = useState("");
  // custom gender checkbox
  const [checked, setChecked] = useState(false);

  const [UserFound, setUserFound] = useState(false);
  const [FinalUser, setFinalUser] = useState({});
  const [message, setMessage] = useState(null);

  const post_user_match = async (e) => {
    e.preventDefault();
    const form = e.target;
    const match_data = {
      batch: form.batch.value,
      gender: form.gender.value,
      type: form.type.value,
    };
    console.log(match_data);
    const res = await fetch("/api/feed/user_match", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(match_data),
    });
    const response = await res.json();
    const { msg, success, final_user } = response;
    if (success) {
      setUserFound(true);
      setFinalUser(final_user);
      e.target.reset();
    } else {
      setMessage(msg);
    }
  };

  // TODO: if (message) => render message as flash alert [frontend_task]
  // messages_type: "Something Went Wrong! Please Try Again!"...

  if (UserFound) {
    console.log(message);
    return <UserProfile final_user={FinalUser} />;
  } else {
    console.log(message);
    return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              sx={{
                fontFamily: "Covered By Your Grace",
                fontSize: "2rem",
                margin: "auto",
              }}
            >
              Find Your Match
            </Typography>

            <form onSubmit={(e) => post_user_match(e)}>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: "6px",
                }}
              >
                <InputLabel
                  required
                  sx={{
                    m: 1,
                    color: "black",
                  }}
                >
                  Interested in?
                </InputLabel>
                <RadioGroup
                  name="gender"
                  row
                  sx={{
                    m: 1,
                    mt:0,
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
                          variant="standard"
                          name="gender"
                          // disabled={!checked}
                          label="Custom"
                          // onKeyDown={(e) => setOtherInfo(e.target.value)}
                          sx={{
                            m: 1,
                            width: "100%",
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
                    color: "black",
                  }}
                >
                  Majors
                </InputLabel>

                <FormGroup row 
                name = "majors"
                sx={{
                  m:1,
                  mt:0,                }}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Any" 
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="CS"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Economics"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="English"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Biology"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Physics"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Chemistry"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Sociology"
                  />
                </FormGroup>

                <InputLabel
                  required
                  sx={{
                    m: 1,
                    color: "black",
                  }}
                >
                  Looking For
                </InputLabel>

                <FormGroup row 
                name = "majors"
                sx={{
                  m:1,
                  mt:0,                }}
                >
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Any" 
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Mess partner"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Date"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Gym buddy"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Chill partner"
                  />

                </FormGroup>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: "15px", backgroundColor:"black", }}
             >
                Search Match
              </Button>

              </Box>
            </form>
          </Box>
        </Container>
      </>
    );
  }
}
