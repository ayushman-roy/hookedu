import React from "react";
import {
  Container,
  Box,
  List,
  // ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

//  Icons Import
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function LeftBar() {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component="div"
          sx={{
            margin: "auto",
            alignItems: "left",
            p: "16px",
          }}
        >
          <Typography
            variant="h3"
            color="primary"
            sx={{
              ml: "16px",
              fontSize: "25px",
              fontWeight: "bold",
              Color: "primary",
              letterSpacing: "2px",
              fontFamily: "Covered By Your Grace",
              mb: "20px",
            }}
          >
            Hookedu
          </Typography>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",

              alignItem: "center",
            }}
          >
            <ListItemButton
              sx={{
                borderRadius: "100px",
                fontSize: "25px",
                mb: "5px",
                alignItems: "left",
              }}
            >
              <ListItemIcon>
                <OtherHousesOutlinedIcon sx={{ fontSize: "26px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{ fontSize: "26px", fontFamily: "Amiko", fontWeight:'500', }}
                  >
                    Home
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                borderRadius: "100px",
                mb: "5px",
                alignItems: "left",

                fontSize: "25px",
              }}
            >
              <ListItemIcon>
                <PermIdentityOutlinedIcon sx={{ fontSize: "26px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{ fontSize: "26px", fontFamily: "Amiko", fontWeight:'500', }}
                  >
                    Profile
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                borderRadius: "100px",

                alignItems: "left",
                mb: "5px",
                fontSize: "25px",
              }}
            >
              <ListItemIcon>
                <BookmarkBorderOutlinedIcon sx={{ fontSize: "26px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{ fontSize: "26px", fontFamily: "Amiko", fontWeight:'500', }}
                  >
                    Bookmark
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                borderRadius: "100px",

                mb: "5px",
                alignItems: "left",
                fontSize: "25px",
              }}
            >
              <ListItemIcon>
                <NotificationsOutlinedIcon sx={{ fontSize: "26px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{ fontSize: "26px", fontFamily: "Amiko", fontWeight:'500', }}
                  >
                    Notification{" "}
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                borderRadius: "100px",

                mb: "5px",
                alignItems: "left",
                fontSize: "25px",
              }}
            >
              <ListItemIcon>
                <EmailOutlinedIcon sx={{ fontSize: "26px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{ fontSize: "26px", fontFamily: "Amiko", fontWeight:'500', }}
                  >
                    Messages
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                borderRadius: "100px",

                mb: "5px",
                alignItems: "left",
                fontSize: "25px",
              }}
            >
              <ListItemIcon>
                <SettingsIcon sx={{ fontSize: "26px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{ fontSize: "26px", fontFamily: "Amiko", fontWeight:'500', }}
                  >
                    {" "}
                    Settings{" "}
                  </Typography>
                }
              />
            </ListItemButton>
          </List>
        </Box>
      </Container>
    </div>
  );
}
