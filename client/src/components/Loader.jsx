import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

export default function Loader() {
  const navigate = useNavigate();

  useEffect(() => {
    async function get_data() {
      const res = await fetch("/api/feed", { method: "GET" });
      const response = await res.json();
      const { msg, success } = response;
      if (!success) {
        navigate("/");
      } else {
        <Alert clsa severity="error">
          {msg}
        </Alert>;
      }
    }
    get_data();
  }, []);

  return (
    <div>
      <Box sx={{ width: "100%" }} bgcolor="pink" p={2}>
        {" "}
        Loader
      </Box>
    </div>
  );
}
