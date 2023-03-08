import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import "./MediaInfo.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import oneMedia from "../../../util/getOneMedia";

function MediaInfo(props) {
  const [media, setMedia] = useState({});
  const location = useLocation();
  const title = location.state.title;
  console.log(title)
  useEffect(() => {
    oneMedia.getMediaByTitle(title).then((media) => {
      if (media && media.length > 0) {
        setMedia(media[0]);
      }
    });
  }, [title]);
  console.log(media);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={media.mediaImagePath}
        title="mediaCover"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {media.title}
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Rating" secondary={media.rating} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Category" secondary={media.category} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Description" secondary={media.description} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Community Review"
              secondary={media.communityReview}
            />
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Link to="/browse">
          <Button size="small">Back</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MediaInfo;

