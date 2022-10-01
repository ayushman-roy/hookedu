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
  Avatar,
} from "@mui/material";

//  Icons Import
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function NavbarMobile() {
  return (
    <div>
      <Container
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          p: 0,
        }}
      >
        <Box sx={{ position: "fixed", backgroundColor:"skyblue", height:"100vh", p:2 }}>
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
                fontSize: "22px",
                mb: "0px",
                alignItems: "left",
                p: "4px",
              }}
            >
              <ListItemIcon sx={{m:0}}>
                <OtherHousesOutlinedIcon sx={{ fontSize: "17px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      p:0,
                      fontSize: "18px",
                      fontFamily: "Amiko",
                      fontWeight: "500",
                    }}
                  >
                    Home
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                borderRadius: "100px",
                mb: "0px",
                alignItems: "left",
                p: "4px",

                fontSize: "22px",
              }}
            >
              <ListItemIcon>
                <PermIdentityOutlinedIcon sx={{ fontSize: "17px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Amiko",
                      fontWeight: "500",
                    }}
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
                p: "4px",
                mb: "0px",
                fontSize: "22px",
              }}
            >
              <ListItemIcon>
                <BookmarkBorderOutlinedIcon sx={{ fontSize: "17px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Amiko",
                      fontWeight: "500",
                    }}
                  >
                    Bookmark
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                borderRadius: "100px",

                mb: "0px",
                alignItems: "left",
                p: "4px",
                fontSize: "22px",
              }}
            >
              <ListItemIcon>
                <NotificationsOutlinedIcon sx={{ fontSize: "17px",}} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Amiko",
                      fontWeight: "500",
                    }}
                  >
                    Notification{" "}
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                borderRadius: "100px",

                mb: "0px",
                alignItems: "left",
                p: "4px",
                fontSize: "22px",
              }}
            >
              <ListItemIcon>
                <EmailOutlinedIcon sx={{ fontSize: "17px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Amiko",
                      fontWeight: "500",
                    }}
                  >
                    Messages
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                borderRadius: "100px",

                mb: "0px",
                alignItems: "left",
                p: "4px",
                fontSize: "22px",
              }}
            >
              <ListItemIcon>
                <SettingsIcon sx={{ fontSize: "17px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "18px",
                      fontFamily: "Amiko",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Settings{" "}
                  </Typography>
                }
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                borderRadius: "100px",

                mb: "0px",
                alignItems: "left",
                p: "4px",
                fontSize: "22px",
              }}
            >
              <ListItemIcon>
                <Avatar sx={{ fontSize: "17px", backgroundColor: "red" }}>
                  S
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "17px",
                      fontFamily: "Amiko",
                      fontWeight: "500",
                    }}
                  >
                    <i>@Shubhamkrsingh</i>
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
