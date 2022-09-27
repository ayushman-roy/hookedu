import React from "react";
import { Box, Container } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";
import "./Feed.css";

export default function Topbar() {
  return (
    <div>
      <Box 
      sx={{
        width:"100vw", 
        postion:"fixed",
        top:0,
        left:0,
        right:0,
        Color:"white",
        p:0,
        m:0,
        }}>
        <AppBar color="white"
        sx={{
          p:0,
          boxShadow:0,
          borderBottom:"0.1px solid #D3D3D3"
        }}
        >
          <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Avatar  sx={{width:35, height:35, bgcolor:"black"}}>S</Avatar>
            </IconButton>


            
            <Typography component="div"
            variant="div" color="primary"
            sx={{
              fontFamily:"Covered By Your Grace",
              fontSize:"22px",
              textTransform:"lowercase",
              fontWeight:"550",
            }}
            >Hookedu</Typography>
            
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
