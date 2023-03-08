import React from "react";
import {Box, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
/*      Button, 
        Table, 
        TableBody, 
        TableCell, 
        TableContainer, 
        TableHead, 
        TableRow, 
        Paper, 
        MenuItem, 
        FormControl, 
        InputLabel, 
        Select, */

const db = [{title: 'movie1', runtime: 120}, {title: 'movie2', runtime: 90}];


class ConsumedMedia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          media: 0,
          myMedia: [],
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.addMedia = this.addMedia.bind(this);
      }

      handleChange(e) {
        this.setState({ media : e.target.value });
      }

      addMedia() {
        this.setState({ myMedia : [...this.state.myMedia, db[this.state.media]] });
    }

    render() {
        return (
            <div className="MyMedia">
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
                        backgroundColor: "#8baac4",
                        }}
                    >
                    </Box>
                </div>
                </section>
                <div>
                    <h1> My Media </h1>
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
                                image="https://m.media-amazon.com/images/I/71jLBXtWJWL._AC_UF1000,1000_QL80_.jpg"
                                alt="add media"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    The Lord of the Rings
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Book
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
                                image="https://m.media-amazon.com/images/I/81xTx-LxAPL._AC_UF894,1000_QL80_.jpg"
                                alt="add media"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Forrest Gump
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
                                image="https://m.media-amazon.com/images/I/91vnzZO5yPL._AC_UF1000,1000_QL80_.jpg"
                                alt="add to want list"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    The Very Hungry Caterpillar
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Book
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
                                image="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"
                                alt="add media"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Minecraft
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
                                image="https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_UF1000,1000_QL80_.jpg"
                                alt="add to want list"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Harry Potter and the Sorcerer's Stone
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Book
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
                                image="https://m.media-amazon.com/images/I/51EG732BV3L._AC_UF894,1000_QL80_.jpg"
                                alt="add media"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    The Matrix
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
                                image="https://i0.wp.com/cedars.cedarville.edu/wp/wp-content/uploads/2020/05/Parasite-scaled.jpg?fit=1657%2C2560&ssl=1"
                                alt="add media"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Parasite
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
                                <CardMedia style = {{ height: 270}}
                                component="img"
                                image="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"
                                alt="add media"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Red Dead Redemption 2
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Game
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                </section>
            </div>
        );
    }
  }
  
  export default ConsumedMedia;