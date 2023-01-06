import React from "react";
import Post from "./Post"
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/system";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";

//  Importing ICONS
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ImageIcon from "@mui/icons-material/Image";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function Loader() {
  // Backend Code

  // const navigate = useNavigate();

  // useEffect(() => {
  //   async function get_data() {
  //     const res = await fetch("/api/feed", { method: "GET" });
  //     const response = await res.json();
  //     const { msg, success } = response;
  //     if (!success) {
  //       navigate("/");
  //     } else {
  //       console.log(msg);
  //     }
  //   }
  //   get_data();
  // }, [navigate]);

  // Post content

  // CODE FOR EXTENDING THE CAPTION

  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  // const ExpandMore = styled((props) => {
  //   const { expand, ...other } = props;
  //   return <IconButton {...other} />;
  // })(({ theme, expand }) => ({
  //   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  //   marginLeft: "auto",
  //   transition: theme.transitions.create("transform", {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // }));



  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          p: 0,
          // width: { xs: "100vw", sm: "auto", md: "100%" },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            m: 3,
            // minwidth:"75%",
            width: { xs: "95%", sm: "55%", md: "80%" },
            p: 1,
          }}
        >
          <Avatar sx={{ mr: 2, bgcolor: "black", height: 44, width: 44 }}>
            S
          </Avatar>
          <input
            className="post-input"
            type="textarea"
            placeholder="What's on your mind?"
          />
          <IconButton>
            <ImageIcon />
          </IconButton>
        </Box>

           <Post/>
           <Post/>
           <Post/>



      </Container>
    </div>
  );
}
