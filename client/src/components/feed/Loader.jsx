import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/system";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";

//  Importing ICONS
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ImageIcon from "@mui/icons-material/Image";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function Loader() {
  // Backend Code

  // const navigate = useNavigate();

  // useEffect(() => {
  //   async function get_data() {
  //     const res = await fetch("/api/feed", { method: "GET" });
  //     const response = await res.json();
  //     const { msg, success } = response;
  //     if (!success) {
  //       navigate("/");
  //     } else {
  //       console.log(msg);
  //     }
  //   }
  //   get_data();
  // }, [navigate]);

  // Post content

  // CODE FOR EXTENDING THE CAPTION

  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  // const ExpandMore = styled((props) => {
  //   const { expand, ...other } = props;
  //   return <IconButton {...other} />;
  // })(({ theme, expand }) => ({
  //   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  //   marginLeft: "auto",
  //   transition: theme.transitions.create("transform", {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // }));

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          p: 0,
          width: { xs: "100vw", sm: "auto", md: "100%" },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex" },
            m: 3,
            // minwidth:"75%",
            width: { xs: "95%", sm: "55%", md: "80%" },
            p: 1,
          }}
        >
          <Avatar sx={{ mr: 2, bgcolor: "black", height: 44, width: 44 }}>
            S
          </Avatar>
          <input
            className="post-input"
            type="textarea"
            placeholder="What's on your mind?"
          />
          <IconButton>
            <ImageIcon />
          </IconButton>
        </Box>

        {/* Code for the Post  */}

        <Card sx={{ width: { xs: "100%", sm: "55%", md: "80%" }, p: 0 }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              p:"2px",
              pt:0,
              pb:0,
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  voluptatum sunt neque nostrum odit, eum libero culpa
                  reprehenderit perferendis ipsa incidunt ad quisquam
                  architecto, facere sequi doloremque temporibus saepe provident
                  voluptatibus dolore reiciendis. Dolorum officia, quas eaque
                  eius, dicta officiis ullam asperiores sit quae necessitatibus
                  minima magnam. Ea, voluptas ducimus?
                </Typography>
              </CardContent>

              <CardActions
                disableSpacing
                sx={{ mt: "0px", pt: "0px", pl: "0px", ml: "0px" }}
              >
                {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton> */}

                <Checkbox
                  {...label}
                  icon={<FavoriteBorder sx={{}} />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />

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

        {/* Code for the Post  */}

        <Card sx={{ width: { xs: "100%", sm: "55%", md: "80%" }, p: 0 }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              p:"5px",
              pt:0,
              pb:0,
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum ma
                </Typography>
              </CardContent>
              <CardMedia
                sx={{ borderRadius: "18px" }}
                component="img"
                height="300"
                width="400"
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

                <Checkbox
                  {...label}
                  icon={<FavoriteBorder sx={{}} />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />

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

           {/* Code for the Post  */}

           <Card sx={{ width: { xs: "100%", sm: "55%", md: "80%" }, p: 0 }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              p:"5px",
              pt:0,
              pb:0,
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum ma
                </Typography>
              </CardContent>
              <CardMedia
                sx={{ borderRadius: "18px" }}
                component="img"
                height="300"
                width="400"
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

                <Checkbox
                  {...label}
                  icon={<FavoriteBorder sx={{}} />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />

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


           {/* Code for the Post  */}

           <Card sx={{ width: { xs: "100%", sm: "55%", md: "80%" }, p: 0 }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              p: 1,
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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ipsum ma
                </Typography>
              </CardContent>
              <CardMedia
                sx={{ borderRadius: "18px" }}
                component="img"
                height="300"
                width="400"
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

                <Checkbox
                  {...label}
                  icon={<FavoriteBorder sx={{}} />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />

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


      </Container>
    </div>
  );
}
