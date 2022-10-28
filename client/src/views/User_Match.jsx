import React from "react";
import { useState } from "react";
import UserProfile from "./User_Profile";
import "../components/feed/Feed.css";
//  Mui Imports
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
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
              marginTop: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              color="primary"
              sx={{
                fontFamily: "Covered By Your Grace",
                fontSize: "2rem",
              }}
            >
              Find Your Match.
            </Typography>

            <form onSubmit={(e) => post_user_match(e)}>
              <Box component="div" sx={{ mb: 1, pb: 1, pt: "8px" }}>
                {/* <Typography variant="div" color="black">
                  Interested in?
                </Typography> */}

                <FormControl>
                  <FormLabel
                  name = "gender"
                    id="demo-radio-buttons-group-label"
                    sx={{
                      mt:1,
                      fontWeight: "bold",
                      fontSize:"1.6rem"
                    }}
                  >
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="gender"
                  >
                    <FormControlLabel
                    name="gender"
                    value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                    name="gender"
                    value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                    name="gender"
                    value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>

                <FormControl>
                <FormLabel
                    name="batch"
                    id="demo-radio-buttons-group-label"
                    sx={{
                      mt:1,
                      fontWeight: "bold",
                      fontSize:"1.6rem"
                    }}
                  >
                    Majors
                  </FormLabel>

                <FormGroup row>
                  <FormControlLabel
                    name="batch"
                    control={<Checkbox value="Chemistry"  />}
                    label="Chemistry" 
                  />
                  <FormControlLabel
                    name="batch"
                    control={<Checkbox/>}
                    label="Biology" 
                    value="Biology"
                  />
                  <FormControlLabel
                    name="batch"
                    control={<Checkbox/>}
                    label="Computer Science" 
                    value="Computer Science"
                  />
                  <FormControlLabel
                    name="batch"
                    control={<Checkbox/>}
                    label="Economics" 
                    value="Economics"
                  />
                  <FormControlLabel
                    name="batch"
                    control={<Checkbox/>}
                    label="English" value="English"
                  />
                  <FormControlLabel
                    name="batch"
                    control={<Checkbox/>}
                    label="History" value="History"
                  />
                  <FormControlLabel
                    name="batch"
                    control={<Checkbox/>}
                    label="Philosophy" value="Philosophy"
                  />
                  <FormControlLabel
                    name="batch"
                    control={<Checkbox/>}
                    label="Mathematics" value="Mathematics"
                  />
                  <FormControlLabel
                    name="batch"
                    control={<Checkbox/>}
                    label="Physics" value="Physics"
                  />
                  <FormControlLabel
                    name="batch"
                    control={<Checkbox/>}
                    label="Political Science" value="Political Science"
                  />
                  <FormControlLabel
                    name="batch"
                    control={<Checkbox/>}
                    label="Psychology" value="Psychology"
                  />
                  <FormControlLabel
                    name="batch"
                    control={<Checkbox/>}
                    label="Sociology/Anthropology" value="Sociology/Anthropology"
                  />
                </FormGroup>
                </FormControl>

                <FormControl>
                <FormLabel
                    name="type"
                    sx={{
                      mt:1,
                      fontWeight: "bold",
                      fontSize:"1.6rem"
                    }}
                  >
                    Searching for?
                  </FormLabel>

                <FormGroup row>
                  <FormControlLabel
                    name="type"
                    control={<Checkbox defaultChecked />}
                    label="Date" value="Date"
                  />
                  <FormControlLabel
                    name="type"
                    control={<Checkbox/>}
                    label="Study Partner" value="Study Partner"
                  />
                  <FormControlLabel
                    name="type"
                    control={<Checkbox/>}
                    label="Gym Buddy" value="Gym Buddy"
                  />
                  <FormControlLabel
                    name="type"
                    control={<Checkbox/>}
                    label="Mess Partner" value="Mess Partner"
                  />
                  <FormControlLabel
                    name="type"
                    control={<Checkbox/>}
                    label="Coding Buddy" value="Coding Buddy"
                  />
                  <FormControlLabel
                    name="type"
                    control={<Checkbox/>}
                    label="Friend" value="Friend"
                  />
                  <FormControlLabel
                    name="type"
                    control={<Checkbox/>}
                    label="Party" value="Party"
                  />
                  <FormControlLabel
                    name="type"
                    control={<Checkbox/>}
                    label="Fuck buddy" value="Fuck buddy"
                  />
                  <FormControlLabel
                    name="type"
                    control={<Checkbox/>}
                    label="High Buddy" value="High Buddy"
                  />
                </FormGroup>
                </FormControl>
                

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, borderRadius: "15px" }}
                  startIcon={<SearchIcon />}
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
