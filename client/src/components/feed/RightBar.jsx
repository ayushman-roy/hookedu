import React from "react";
import {
  Container,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Typography,
  Avatar,
  IconButton ,
  TextField,
} from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';


export default function RightBar() {
  return (
    <div>
<<<<<<< HEAD:client/src/components/Feed_&_Components/RightBar.jsx
      <Container bg='black'
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
=======
      <Box
        sx={{ display: ["flex", { xs: "none", sm: "block" }] }}
        bgcolor="yellow"
        p={2}
>>>>>>> 6ae5af5ce16df7d03edbfaa2d07b323c8995d840:client/src/components/feed/RightBar.jsx
      >
        <Box sx={{position:"fixed"}}>

        <Box component="div" sx={{display:"flex", flexDirection:"column", justifycontent:"center"}}>
          {/* Chat headder wrapprt */}
        <Box component="div" sx={{display:"flex", justifyContent:"space-between", }}>
          <Typography variant='div'
          sx={{
            p:1,
            fontSize: "20px",
            fontWeight:"bold",
            fontFamily:"Amkiko"
          }}
          >
            Message
            </Typography>
          
          <div>
          <IconButton>
          <SettingsIcon/>
          </IconButton>
          <IconButton>
          <MapsUgcOutlinedIcon/>
          </IconButton>

          </div>

          </Box>
          <TextField placeholder="Search" 
          variant="standard" 
          size="small"
          sx={{width:"96%", alignItems:"center",}} 
          />

        </Box>
        </Box>
      </Container>
    </div>
  );
}
