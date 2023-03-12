import { React, useEffect, useState } from 'react';
import {Box, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import allMedias from '../../../util/getAllMedias';
import getUserWishlist from '../../../util/getUserWishlist';
import { Link,  } from "react-router-dom";



function WantMedia() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
   
    const [medias, setMedias] = useState([]);
    const [mediaTitles, setMediaTitles] = useState([]);

  
    useEffect(() => {
        allMedias.getAllMedias().then((medias) => setMedias(medias));
        getUserWishlist.getUserWishlist(user.username).then((mediaTitles) => setMediaTitles(mediaTitles))
    }, [])


    const infoArr = []
    const userList = mediaTitles.list
    for(const userMedia in userList){
        for(const media in medias){
            if(medias[media].title === userList[userMedia]){
                console.log(medias[media]);
                infoArr.push(medias[media])
            }
        }
    }
  
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
            <Link to="/library"><button style={{float: 'left', margin: 20, padding:12}}>Back</button></Link>

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
                {
                infoArr.map((m, i) => { 
                    return(
                        <Grid item>
                        <Card sx={{ maxWidth: 300 }}>
                            <CardActionArea>
                            <Link to="/media-info" state={{media: m}}>

                                <CardMedia style = {{ height: 300}}
                                component="img"
                                image={m.mediaImagePath}
                                alt="media"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {m.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {m.type}
                                </Typography>
                                </CardContent>
                                </Link>
                            </CardActionArea>
                        </Card>
                    </Grid>)     
                })}
            </Grid>
            </section>
        </div>
    );
  }
  
  export default WantMedia;