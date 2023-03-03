import React from "react";
import { Link } from 'react-router-dom';
import { Grid, Box,  Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import LandingNavBar from "../../LandingNavBar/LandingNavBar";
import './Library.css';

function Library() {
    return (
        <div className="Library">
                <div style={{ width: '100%' }}>
                    <Box
                        sx={{
                        display: 'flex',
                        m: 1,
                        p: 1,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        borderColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        backgroundColor: 'lightslategray',
                        height: '40px',
                        }}
                    >
                    <LandingNavBar />
                    </Box>
                </div>
                <Grid
                    container
                    rowSpacing={1} 
                    columnSpacing={20}
                    direction="row"
                    justifyContent={"center"}
                    alignItems="center"
                    >
                    <Grid item>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea component={Link} to="/addmedia">
                                <CardMedia style = {{ height: 300}}
                                component="img"
                                image={ require (".//outline-board-game-box-icon-isolated-black-simple-vector-28248121.jpg")}
                                alt="add media"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    My Media
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Add media to your consumed media library
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea component={Link} to="/addwantlist">
                                <CardMedia style = {{ height: 300}}
                                component="img"
                                image={require (".//board-game-box.JPG")}
                                alt="add to want list"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Want List
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Add media to your want to consume media library
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
        </div>
    )
};

export default Library;