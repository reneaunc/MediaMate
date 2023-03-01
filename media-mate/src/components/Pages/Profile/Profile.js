import React from "react";
import { Avatar, Card, List, ListItem, Typography, ListItemText } from "@mui/material";
import './Profile.css';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.user.username,
            dob: props.user.dateOfBirth,
            password: props.user.password,
            avatar: props.user.avatar
        }
    }
    render(){
        console.log(this.props)
        return(
            <Card sx={{ maxWidth: 1000 }}>
                <Avatar>
                    {this.state.avatar}
                </Avatar>
                <Typography variant="h1" component="div">
                    Welcome, {this.state.username}
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText>
                            DOB: {this.state.dob}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            Password: {this.state.password}
                        </ListItemText>
                    </ListItem>
                </List>
            </Card>
        )
    }
}

export default Profile