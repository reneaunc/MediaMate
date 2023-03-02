import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Card, List, ListItem, Typography, ListItemText } from "@mui/material";
//import './Profile.css';

const Profile = () => {
    // getting user data from redux store
    const { user } = useSelector(state => state.auth);

    return (
        <Card sx={{ maxWidth: 1000 }}>
            <Avatar>
                OP
            </Avatar>
            <Typography variant="h1" component="div">
                Welcome, {user?.username}
            </Typography>
            <List>
                <ListItem>
                    <ListItemText>
                        Email: {user?.email}
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemText>
                        Password: {user?.password}
                    </ListItemText>
                </ListItem>
            </List>
        </Card>
    )

}

export default Profile