import React from "react";
import Card from '@mui/material/Card'
import './MediaCard.css';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

class MediaCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.curMedia.title,
            releaseYear: props.curMedia.releaseYear,
            rating: props.curMedia.rating,
            category: props.curMedia.category,
            description: props.curMedia.description,
            communityReview: props.curMedia.communityReview,
            libraryStatus: props.curMedia.libraryStatus, //Should be either consumed, wishlist, or None
            mediaImagePath: props.curMedia.mediaImagePath
        }
    }
    render() {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <Link to="/media-info" state={this.state}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={this.state.mediaImagePath}
                        title="mediaCover"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {this.state.title}
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Rating"
                                    secondary={this.state.rating}
                                />
                            </ListItem>,
                            <ListItem>
                                <ListItemText
                                    primary="Community Review"
                                    secondary={this.state.communityReview}
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                    </Link>
                </CardActionArea>
                <CardActions>
                    <Link to="/media-info" state={{media: this.state}}><Button size="small">Add To Library</Button></Link>
                </CardActions>
            </Card>
            // <div className="MediaInfoCard">
            //     <div className="image_container" style={cardStyle}>
            //         <img src={this.state.mediaImagePath} alt=''/>
            //     </div>
            //     <h2>{this.state.title}</h2>
            //     <h3>Rating: {this.state.rating} Release Year: {this.state.releaseYear}</h3>
            //     <h3>Category: {this.state.category[0]}</h3>
            //     <p>{this.state.description}</p>
            //     <h2>{this.state.communityReview}</h2>
            // </div>
        )
    }
};

export default MediaCard;