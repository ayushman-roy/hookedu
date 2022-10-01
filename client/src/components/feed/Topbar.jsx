import React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/Drawer";
import "./Feed.css";
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
import CloseIcon from "@mui/icons-material/Close";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Box
        sx={{
          width: "100vw",
          postion: "fixed",
          top: 0,
          left: 0,
          right: 0,
          Color: "white",
          p: 0,
          m: 0,
        }}
      >
        <AppBar
          color="white"
          sx={{
            m:0,
            p: 0,
            boxShadow:0 ,
            borderBottom: "0.2px solid #D3D3D3",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between",  }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <Avatar sx={{ width: 29, height: 29, bgcolor: "black" }}>
                S
              </Avatar>
            </IconButton>

            <Typography
              component="div"
              variant="div"
              color="primary"
              sx={{
                fontFamily: "Covered By Your Grace",
                fontSize: "24px",
                textTransform: "lowercase",
                fontWeight: "550",
              }}
            >
              Hookedu
            </Typography>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          variant = "persistent"
          anchor="left"
          onClose={() => setOpen(false)}
          open={open}
          sx={{ width: "70%" }}
        >
          <Container
            sx={{
              backgroundColor: "lightgrey",
              width: "79vw",
              display: "flex",
              flexDirection: "column",
              p: 0,
            }}
          >
            <Box
              sx={{
                width: "72vw",
                display: "flex",
                flexDirection: "column",
                position: "fixed",
                height: "100vh",
                p: 2,
              }}
            >
              <Box sx={{ display: "flex", justifyContent:"space-between",mb:2, }}>
                <Typography
                  variant="div"
                  component="div"
                  sx={{
                    p: 0,
                    m: 0,
                    fontFamily: "Amiko",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Account information
                </Typography>

                <IconButton
                onClick={() => setOpen(false)}
                  sx={{
                    p: 0,
                    m: 0,
                    pl: 0,
                    ml: 0,
                  }}
                >
                  <CloseIcon sx={{ color: "black", pl: 0, ml: 0 }} />
                </IconButton>
              </Box>

              <Avatar sx={{backgroundColor:"black", mt:1,}}>
                A
              </Avatar>

              <Typography sx={{mt:"5px", fontWeight:"450", color:"black"}}>
                Amber Root
              </Typography>

              <List
                sx={{
                  mt: 1,
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
                  <ListItemIcon sx={{ m: 0 }}>
                    <OtherHousesOutlinedIcon sx={{ fontSize: "17px" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="div"
                        sx={{
                          p: 0,
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
                    <NotificationsOutlinedIcon sx={{ fontSize: "17px" }} />
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
              </List>
            </Box>
          </Container>
        </SwipeableDrawer>
      </Box>
    </div>
  );
}
