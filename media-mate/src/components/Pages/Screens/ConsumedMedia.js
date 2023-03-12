import { React, useEffect, useState } from 'react';
import {Box, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import allMedias from '../../../util/getAllMedias';
import allUsers from '../../../util/getAllUsers';
import getUserWishlist from '../../../util/getUserWishlist';
import { Link } from "react-router-dom";


//test array
const db = [{img: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
            ,title: "Shrek",
            type: "Movie"}]

function ConsumedMedia() {
//   const [media, setMedia] = useState({});
//   const [myMedia, setMyMedia] = useState(db); //change to empty list []
    // const [users, setUsers] = useState([]);
    const [medias, setMedias] = useState([]);
    const [media, setMedia] = useState([]);
    const [mediaTitles, setMediaTitles] = useState([]);
    const [userMedia, setUserMedia] = useState([]);
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        allMedias.getAllMedias().then((medias) => setMedias(medias));
        getUserWishlist.getUserWishlist("test").then((mediaTitles) => setMediaTitles(mediaTitles))
    }, [])


    const infoArr = []
    //console.log(mediaTitles)
    const userList = mediaTitles.list
    for(const userMedia in userList){
        for(const media in medias){
            console.log(media);
            if(medias[media].title === userList[userMedia]){
                infoArr.push(medias[media])
            }
        }
    }
  

//   function handleChange(e) {
//     setMedia(e.target.value);
//   }

//   function updateMedia(){
//     setMyMedia([...myMedia, media]);
//   }

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
                                <CardMedia style = {{ height: 300}}
                                component="img"
                                image={m.img}
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
                            </CardActionArea>
                        </Card>
                    </Grid>)     
                })}
            </Grid>
            </section>
        </div>
    );
  }
  
  export default ConsumedMedia;