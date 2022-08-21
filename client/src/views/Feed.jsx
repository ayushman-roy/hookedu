import React from "react";
import Loader from "../components/Feed_&_Components/Loader";
import RightBar from "../components/Feed_&_Components/RightBar";
import LeftBar from "../components/Feed_&_Components/LeftBar";
import { Box } from "@mui/material";
import  "../components/Feed_&_Components/Feed.css";
const Feed = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box sx={{ width:{xs:"0%", sm:"25%"}, display: { xs: "none", sm: "block" } }}>
        <LeftBar />
      </Box>
      <Box sx={{ width:{xs:"100%", sm:"50%"} }}>
        <Loader />
      </Box>
      <Box sx={{ width:{xs:"0%", sm:"25%"} }}>
        <RightBar />
      </Box>
    </Box>
  );
};

export default Feed;
