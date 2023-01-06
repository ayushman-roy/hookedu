import React from "react";

import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteIcon from "@mui/icons-material/Favorite";
//  Importing ICONS
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";

export default function Post() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <Card sx={{ width: { xs: "100%", sm: "55%", md: "80%" }, p: 0 }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            p: "5px",
            pt: 0,
            pb: 0,
          }}
        >
          <Box sx={{ pr: "0px", mr: "0px", p: 0 }}>
            <CardHeader
              sx={{ pr: "0px", mr: "0px", pl: 0, ml: 0, mt: 1 }}
              avatar={
                <Avatar
                  sx={{ height: "53px", width: "53px", p: 0 }}
                  src="https://wallpaperaccess.com/full/1222833.jpg"
                  aria-label="recipe"
                />
              }
            />
          </Box>

          <Box sx={{ pl: "0px", ml: "0px" }}>
            <CardHeader
              sx={{
                pl: "0px",
                ml: "0px",
                pb: "0px",
              }}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={
                <Typography sx={{ fontWeight: "bold", p: 0, m: 0 }}>
                  Alpha Jam
                </Typography>
              }
            />
            <CardContent sx={{ pl: "0px", ml: "0px", pt: "0px", mt: "0px" }}>
              <Typography variant="body2" color="black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                ma
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ borderRadius: "18px", width: "90%" }}
              component="img"
              height="300"
              image="https://thispersondoesnotexist.com/image"
              alt="Img"
            />

            <CardActions
              disableSpacing
              sx={{ mt: "0px", pt: "0px", pl: "0px", ml: "0px" }}
            >
              {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton> */}

              <IconButton aria-label="add to favorites">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<FavoriteIcon color="primary" />}
                />
              </IconButton>

              <IconButton aria-label="share">
                <MapsUgcOutlinedIcon sx={{}} />
              </IconButton>

              <IconButton aria-label="share">
                <ShareIcon sx={{}} />
              </IconButton>
            </CardActions>
          </Box>
        </Box>
      </Card>

      {/* Code for plus button to post  */}
    </div>
  );
}
