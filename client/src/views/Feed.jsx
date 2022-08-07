import React from "react";
import Loader from "../components/Loader";
import RightBar from "../components/RightBar";
import LeftBar from "../components/LeftBar";
import { Box } from "@mui/material";

const Feed = () => {
  return (
    <Box
      sx={{
        p: "0px",
        m: "0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: "0px",
          m: "0px",
        }}
      >
        <LeftBar />
        <Loader />
        <RightBar />
      </Box>
    </Box>
  );
};

export default Feed;
