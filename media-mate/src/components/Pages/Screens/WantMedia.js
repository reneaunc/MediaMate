import React from "react";
import {Box, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

class WantMedia extends React.Component {
    render() {
        return (
            <main>
                <section>
                <div style={{ width: '100%' }}>
                    <Box
                        sx={{
                        display: 'flex',
                        m: 1,
                        p: 2.5,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        borderColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        backgroundColor: '#8baac4',
                        }}
                    >
                    </Box>
                </div>
                </section>
                <div>
                    <h1> My Want List </h1>
                </div>
                <section>
                <Grid
                    container
                    rowSpacing={1} 
                    columnSpacing={2}
                    direction="row"
                    justifyContent={"center"}
                    alignItems="center"
                    >
                    <Grid item>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia style = {{ height: 300}}
                                component="img"
                                image="https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
                                alt="add media"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shrek
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Movie
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia style = {{ height: 300}}
                                component="img"
                                image="https://image.api.playstation.com/cdn/UP4415/CUSA02768_00/4E2BQXbe6ArXunsKvcyziEaT0pOryWIb.png"
                                alt="add to want list"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Goat Simulator
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Game
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 450 }}>
                            <CardActionArea>
                                <CardMedia style = {{ height: 300}}
                                component="img"
                                image="https://m.media-amazon.com/images/I/81JWVTlPQ2L._AC_UF894,1000_QL80_.jpg"
                                alt="add to want list"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Fight Club
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Movie
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 450 }}>
                            <CardActionArea>
                                <CardMedia style = {{ height: 300}}
                                component="img"
                                image="https://m.media-amazon.com/images/I/81jtrIKJd2L._AC_UF1000,1000_QL80_.jpg"
                                alt="add to want list"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    The Da Vinci Code
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Book
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 450 }}>
                            <CardActionArea>
                                <CardMedia style = {{ height: 300}}
                                component="img"
                                image="https://upload.wikimedia.org/wikipedia/en/e/e0/Wii_Sports_Europe.jpg?20130209172832"
                                alt="add to want list"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Wii Sports
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Game
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                                <CardMedia style = {{ height: 268}}
                                component="img"
                                image="https://images-prod.dazeddigital.com/318/azure/dazed-prod/1140/6/1146850.jpg"
                                alt="add to want list"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Goosebumps: The Haunted Mask
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Book
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 450 }}>
                            <CardActionArea>
                                <CardMedia style = {{ height: 300}}
                                component="img"
                                image="https://m.media-amazon.com/images/I/712aNdEk6-L._SY500_.jpg"
                                alt="add to want list"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Spirited Away
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Movie
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 450 }}>
                            <CardActionArea>
                                <CardMedia style = {{ height: 300}}
                                component="img"
                                image="https://static-cdn.jtvnw.net/ttv-boxart/497057-272x380.jpg"
                                alt="add to want list"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Destiny 2
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Game
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={{ maxWidth: 450 }}>
                            <CardActionArea>
                                <CardMedia style = {{ height: 300}}
                                component="img"
                                image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg"
                                alt="add to want list"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    The Catcher in the Rye
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Book
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                </section>
            </main>
        );
    }
  }
  
  export default WantMedia;