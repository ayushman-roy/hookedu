import React from "react";

// Importing Icon
//  Icons Import
import { Box, Container } from "@mui/system";

import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function Bottombar() {
  const [value, setValue] = React.useState("Home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box
      sx={{
        position:"fixed",
        bottom:"0px",
        left:0,
        right:0,
        p:0,
        m:0,
        borderTop:"0.5px solid #D3D3D3"

      }}>
      <BottomNavigation
        sx={{ width: "100vw", }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          value="Home"
          icon={< OtherHousesOutlinedIcon />}
        />
        <BottomNavigationAction
          value="Notifications"
          icon={<NotificationsOutlinedIcon />}
        />
        <BottomNavigationAction
          value="Settings"
          icon={<SettingsIcon />}
        />
        <BottomNavigationAction
          value="Messages"
          icon={<EmailOutlinedIcon />}
        />
      </BottomNavigation>
      </Box>

    </div>
  );
}
