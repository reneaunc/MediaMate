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
import addUserWish from "../../../util/addUserWish";
import addMediaDB from "../../../util/addMediaDB";
import removeUserWish from "../../../util/removeUserWish";
import addUserConsume from "../../../util/addUserConsume";
import removeUserConsume from "../../../util/removeUserConsume";
import addHistoryDB from "../../../util/addHistory";

class MediaCard extends React.Component {
    constructor(props) {
        super(props);
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

        this.userAddWish = this.userAddWish.bind(this)
        this.userRemoveWishConsume = this.userRemoveWishConsume.bind(this)
        this.userAddConsumer = this.userAddConsumer.bind(this)
    } 

    userAddWish(event) {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) {
            alert("Please login or signup to save your media choice")
        } else {
            addUserWish.addUserWishlist(this.state.title, user.username)
            addMediaDB.addMediaCollection(this.state.title, this.state.releaseYear, this.state.rating, 
                this.state.description, this.state.communityReview, this.state.libraryStatus, this.state.mediaImagePath)
            addHistoryDB.addHistoryCollection(user.username, `add wishlist`, this.state.title, this.state.releaseYear, this.state.rating, 
            this.state.description, this.state.communityReview, this.state.libraryStatus, this.state.mediaImagePath)

        }
        event.preventDefault();
    }

    userRemoveWishConsume(event) {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) {
            alert("Please login or signup to remove your media choice")
        } else {
            removeUserWish.removeUserWishlist(this.state.title, user.username)
            removeUserConsume.removeUserConsumelist(this.state.title, user.username)
            addHistoryDB.addHistoryCollection(user.username, `remove`, this.state.title, this.state.releaseYear, this.state.rating, 
            this.state.description, this.state.communityReview, this.state.libraryStatus, this.state.mediaImagePath)
        }
        event.preventDefault();
    }

    userAddConsumer(event) {
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user) {
            alert("Please login or signup to save your media choice")
        } else {
            addUserConsume.addUserConsumelist(this.state.title, user.username)
            addMediaDB.addMediaCollection(this.state.title, this.state.releaseYear, this.state.rating, 
                this.state.description, this.state.communityReview, this.state.libraryStatus, this.state.mediaImagePath)
            addHistoryDB.addHistoryCollection(user.username, `add consume`, this.state.title, this.state.releaseYear, this.state.rating, 
                this.state.description, this.state.communityReview, this.state.libraryStatus, this.state.mediaImagePath)

        }
        event.preventDefault();
    }

    render() {
        return (
            <Card sx={
                {
                    maxWidth: 345,
                    padding: 1.2, 
                      
                    }}>
                <CardActionArea>
                    <Link to="/media-info" state={{media: this.media, from: "browse"}}>
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
                    <Button onClick={this.userAddWish} size="small">Add To Wishlist</Button>
                    <Button onClick={this.userAddConsumer} size="small">Add to Consumed List</Button>
                    <Button onClick={this.userRemoveWishConsume} size="small">Remove from Library</Button>
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