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
        console.log(msg);
      }
    }
    get_data();
  }, [navigate]);

  return (
    <div>
      <Box
        sx={{ display: "flex",}}
        bgcolor="Red"
        p={2}
      >
        Main Feed
      </Box>
    </div>
  );
}
