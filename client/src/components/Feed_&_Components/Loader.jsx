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
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


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
        }}
        p={2}
      >
        <Box
          sx={{
            display: "flex",
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

        <Card sx={{ width: { xs: "100%", sm: "55%", md: "80%" } }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://wallpaperaccess.com/full/1222833.jpg"
                aria-label="recipe"
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Cristiano Ronaldo"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="350"
            image="https://wallpaperaccess.com/full/1222833.jpg"
            alt="Img"
          />

          <CardActions disableSpacing sx={{ mt: "0px", pt: "0px" }}>
            {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton> */}

            <Checkbox
              {...label}
              icon={<FavoriteBorder sx={{ color: "black" }} />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />

            <IconButton aria-label="share">
              <MapsUgcOutlinedIcon sx={{ color: "black" }} />
            </IconButton>

            <IconButton aria-label="share">
              <ShareIcon sx={{ color: "black" }} />
            </IconButton>
          </CardActions>

          <CardContent sx={{ pt: "0px", mt: "0px" }}>
            <Typography variant="body2" color="black">
              SUIIIII..... Hala Madrid
            </Typography>
          </CardContent>
        </Card>

        {/* Code for the Post  */}

        <Card sx={{ width: { xs: "100%", sm: "55%", md: "80%" } }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://media.gettyimages.com/photos/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-picture-id955410340?k=20&m=955410340&s=612x612&w=0&h=rV5HPhDWLqHCP9MihOcvrMQ0I1aLzm46Ahwwwpw7nd0="
                aria-label="recipe"
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Lionel Messi"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="350"
            image="https://media.gettyimages.com/photos/lionel-messi-of-barcelona-celebrates-after-scoring-his-sides-second-picture-id955410340?k=20&m=955410340&s=612x612&w=0&h=rV5HPhDWLqHCP9MihOcvrMQ0I1aLzm46Ahwwwpw7nd0="
            alt="Img"
          />

          <CardActions disableSpacing sx={{ mt: "0px", pt: "0px" }}>
            {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton> */}

            <Checkbox
              {...label}
              icon={<FavoriteBorder sx={{ color: "black" }} />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />

            <IconButton aria-label="share">
              <MapsUgcOutlinedIcon sx={{ color: "black" }} />
            </IconButton>

            <IconButton aria-label="share">
              <ShareIcon sx={{ color: "black" }} />
            </IconButton>
          </CardActions>

          <CardContent sx={{ pt: "0px", mt: "0px" }}>
            <Typography variant="body2" color="black">
              Suiiii
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: { xs: "100%", sm: "55%", md: "80%" } }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://media.gettyimages.com/photos/india-batsman-virat-kohli-celebrates-his-century-during-day-two-of-picture-id1009673208?k=20&m=1009673208&s=612x612&w=0&h=70D9EfmBajbvs__SoiTe3t86r-eotFKK_3asEHWJqg4="
                aria-label="recipe"
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Virat Kohli"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="350"
            image="https://media.gettyimages.com/photos/india-batsman-virat-kohli-celebrates-his-century-during-day-two-of-picture-id1009673208?k=20&m=1009673208&s=612x612&w=0&h=70D9EfmBajbvs__SoiTe3t86r-eotFKK_3asEHWJqg4="
            alt="Img"
          />

          <CardActions disableSpacing sx={{ mt: "0px", pt: "0px" }}>
            {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton> */}

            <Checkbox
              {...label}
              icon={<FavoriteBorder sx={{ color: "black" }} />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />

            <IconButton aria-label="share">
              <MapsUgcOutlinedIcon sx={{ color: "black" }} />
            </IconButton>

            <IconButton aria-label="share">
              <ShareIcon sx={{ color: "black" }} />
            </IconButton>
          </CardActions>

          <CardContent sx={{ pt: "0px", mt: "0px" }}>
            <Typography variant="body2" color="black">
              SUIIIII..... Hala Madrid
            </Typography>
          </CardContent>
        </Card>
        {/* END OF POST */}
        {/* Code for the Post  */}

        <Card sx={{ width: { xs: "100%", sm: "55%", md: "80%" } }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://wallpaperaccess.com/full/1222833.jpg"
                aria-label="recipe"
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Cristiano Ronaldo"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="350"
            image="https://wallpaperaccess.com/full/1222833.jpg"
            alt="Img"
          />

          <CardActions disableSpacing sx={{ mt: "0px", pt: "0px" }}>
            {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton> */}

            <Checkbox
              {...label}
              icon={<FavoriteBorder sx={{ color: "black" }} />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />

            <IconButton aria-label="share">
              <MapsUgcOutlinedIcon sx={{ color: "black" }} />
            </IconButton>

            <IconButton aria-label="share">
              <ShareIcon sx={{ color: "black" }} />
            </IconButton>
          </CardActions>

          <CardContent sx={{ pt: "0px", mt: "0px" }}>
            <Typography variant="body2" color="black">
              SUIIIII..... Hala Madrid
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: { xs: "100%", sm: "55%", md: "80%" } }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://wallpaperaccess.com/full/1222833.jpg"
                aria-label="recipe"
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Cristiano Ronaldo"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="350"
            image="https://wallpaperaccess.com/full/1222833.jpg"
            alt="Img"
          />

          <CardActions disableSpacing sx={{ mt: "0px", pt: "0px" }}>
            {/* <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton> */}

            <Checkbox
              {...label}
              icon={<FavoriteBorder sx={{ color: "black" }} />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />

            <IconButton aria-label="share">
              <MapsUgcOutlinedIcon sx={{ color: "black" }} />
            </IconButton>

            <IconButton aria-label="share">
              <ShareIcon sx={{ color: "black" }} />
            </IconButton>
          </CardActions>

          <CardContent sx={{ pt: "0px", mt: "0px" }}>
            <Typography variant="body2" color="black">
              SUIIIII..... Hala Madrid
            </Typography>
          </CardContent>
        </Card>

        {/* END OF POST */}
        {/* Code for the Post  */}
        {/* Code for plus button to post  */}
        <IconButton  sx={{bgColor:"black"}}>
          <AddCircleOutlineIcon color="primary" 
          sx={{
            width:44, 
            height:44,
            
            displaly:"none",
            position:"fixed",
            bottom:"14px",
            right:"8px",
          }}
           />
        </IconButton>
      </Container>
    </div>
  );
}
