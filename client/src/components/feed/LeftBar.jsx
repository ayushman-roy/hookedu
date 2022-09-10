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

export default function LeftBar() {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{position:"fixed",}}>

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
              fontSize: "22px",
              fontWeight: "bold",
              Color: "primary",
              letterSpacing: "2px",
              fontFamily: "Covered By Your Grace",
              mb: "23px",
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
                fontSize: "22px",
                mb: "2px",
                alignItems: "left",
                p:"8px",
              }}
              >
              <ListItemIcon>
                <OtherHousesOutlinedIcon sx={{ fontSize: "23px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                  variant="div"
                  sx={{
                    fontSize: "23px",
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
                mb: "2px",
                alignItems: "left",
                p:"8px",

                fontSize: "22px",
              }}
            >
              <ListItemIcon>
                <PermIdentityOutlinedIcon sx={{ fontSize: "23px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "23px",
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
                p:"8px",
                mb: "2px",
                fontSize: "22px",
              }}
            >
              <ListItemIcon>
                <BookmarkBorderOutlinedIcon sx={{ fontSize: "23px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "23px",
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

                mb: "2px",
                alignItems: "left",
                p:"8px",
                fontSize: "22px",
              }}
            >
              <ListItemIcon>
                <NotificationsOutlinedIcon sx={{ fontSize: "23px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "23px",
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

                mb: "2px",
                alignItems: "left",
                p:"8px",
                fontSize: "22px",
              }}
            >
              <ListItemIcon>
                <EmailOutlinedIcon sx={{ fontSize: "23px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "23px",
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

                mb: "2px",
                alignItems: "left",
                p:"8px",
                fontSize: "22px",
              }}
            >
              <ListItemIcon>
                <SettingsIcon sx={{ fontSize: "23px" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "23px",
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

                mb: "2px",
                alignItems: "left",
                p:"8px",
                fontSize: "22px",
              }}
            >
              <ListItemIcon>
              <Avatar sx={{fontSize:"23px", backgroundColor:"red"}}>S</Avatar>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "16px",
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
        </Box>
      </Container>
    </div>
  );
}
