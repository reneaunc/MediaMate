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
            id: props.curMedia.id,
            title: props.curMedia.title,
            releaseYear: props.curMedia.release,
            rating: props.curMedia.rating,
            description: props.curMedia.overview,
            communityReview: props.curMedia.reviews,
            libraryStatus: props.curMedia.libraryStatus, //Should be either consumed, wishlist, or None
            mediaImagePath: props.curMedia.img
        }
        this.media = {
            title: this.state.title, 
            releaseYear: this.state.releaseYear,
            rating: this.state.rating,
            description: this.state.description,
            communityReview: this.state.communityReview,
            libraryStatus: this.state.libraryStatus,
            mediaImagePath: this.state.mediaImagePath
        }
    } 
    render() {
        return (
            <Card sx={
                {
                    maxWidth: 345,
                    padding: 1.2, 
                      
                    }}>
                <CardActionArea>
                    <Link to="/media-info" state={{media: this.media}}>
                    <CardMedia
                        sx={{ height: 280 }}
                        image={this.state.mediaImagePath}
                        title="mediaCover"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {this.state.title}
                        </Typography>

                        <Typography
                            sx={{ maxHeight: 200, overflow: 'hidden' }} variant="body2" color="text.secondary">
                            {this.state.description}
                        </Typography>

                        <List>
                            <ListItem>
                                <ListItemText
                                    primary= {this.state.communityReview}
                                    secondary="Community Rating"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary= {this.state.releaseYear}
                                    secondary="Release"
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                    </Link>
                </CardActionArea>
                <CardActions>
                    <Link to="/library"><Button size="small">Add To Library</Button></Link>
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