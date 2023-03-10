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
//import oneMedia from "../../../util/getOneMedia";

function MediaInfo(props) {
  //const [media, setMedia] = useState({});
  const location = useLocation();
  //const { title, releaseYear, rating, description, communityReview, libraryStatus, mediaImagePath } = location.state;
  const {media, from} = location.state;
  for (const key in media) {
    if (media[key] === "" || media[key] == null){
      media[key] = "N/A"
    }
  }
  // console.log(test)
  // console.log(title)
  // console.log(releaseYear)
  // console.log(rating)
  // console.log(description)
  // console.log(communityReview)
  // console.log(libraryStatus)
  // console.log(mediaImagePath)
  // useEffect(() => {
  //   oneMedia.getMediaByTitle(`"${title}"`).then((media) => {
  //     if (media && media.length > 0) {
  //       setMedia(media[0]);
  //     }
  //   });
  // }, [title]);
  return (
    <div style={{ margin: 100 }}>
      <div>
        <Card raised={true} sx={{ maxWidth: 2000, maxHeight: 1000 }}>
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
                <ListItemText primary="Description" secondary={media.description} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Community Review"
                  secondary={media.communityReview}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Release Year" secondary={media.releaseYear} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Library Status" secondary={media.libraryStatus} />
              </ListItem>
            </List>
          </CardContent>
          <CardActions>
            <Link to={`/${from}`}>
              <Button size="small">Back</Button>
            </Link>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default MediaInfo;

