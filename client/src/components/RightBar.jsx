import React from "react";
import { Box } from "@mui/material";

export default function RightBar() {
  return (
    <div>
      <Box
        sx={{ display: "flex", display: { xs: "none", sm: "block" } }}
        bgcolor="yellow"
        flex={1}
        p={2}
      >
        Right-Sidebar
      </Box>
    </div>
  );
}
