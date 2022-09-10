import React from "react";
import Loader from "../components/feed/Loader";
// import RightBar from "../components/feed/RightBar";
import LeftBar from "../components/feed/LeftBar";
import  "../components/feed/Feed.css";
import { Box } from "@mui/material";

const Feed = () => {
  return (
    <Box
      sx={{
        // display: "flex",
      }}
    >
    <Box sx={{display: "flex",flexDirectoin:"row"}}>
      <Box sx={{ width:{xs:"0%", md:"25%"}, display: { xs: "none", sm: "none", md:"block" } }}>
        <LeftBar />
      </Box>
      <Box sx={{ width:{xs:"100%", md:"50%"} }}>
        <Loader />
      </Box>
      <Box sx={{ width:{xs:"0%", md:"25%"}, display: { xs: "none", sm: "none", md:"block" } }}>
        {/* <RightBar /> */}
      </Box>
    </Box>
      {/* <Box sx={{ width:{xs:"100%", md:"0%"},display: { xs: "block", sm: "none", md:"none" } }}>
        <Bottombar />
      </Box> */}
    </Box>
  );
};

export default Feed;
