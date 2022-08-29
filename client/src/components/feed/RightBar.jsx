import React from "react";
import { Box } from "@mui/material";

export default function RightBar() {
  return (
    <div>
      <Box
        sx={{ display: ["flex", { xs: "none", sm: "block" }] }}
        bgcolor="yellow"
        p={2}
      >
        Right-Sidebar
      </Box>
    </div>
  );
}
