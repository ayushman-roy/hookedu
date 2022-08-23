import React from "react";
import Loader from "../components/feed/Loader";
import RightBar from "../components/feed/RightBar";
import LeftBar from "../components/feed/LeftBar";
import  "../components/feed/Feed.css";
import { Box } from "@mui/material";

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
