import React from "react";
import Card from '@mui/material/Card'
import './MediaInfo.css';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

class MediaInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.card
    }
    render() {
        return (
            <Card sx={{ maxWidth: 345 }}>
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
                                primary="Category"
                                secondary={this.state.category}
                            />
                        </ListItem>,
                        <ListItem>
                            <ListItemText
                                primary="Description"
                                secondary={this.state.description}
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
                <CardActions>
                    <Link to="/browse"><Button size="small">Back</Button></Link>
                </CardActions>
            </Card>
        )
    }
}

export default MediaInfo;