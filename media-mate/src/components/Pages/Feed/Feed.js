import React, {useState, useEffect} from "react";
import styles from './Feed.module.css';
import Post from "../Post/Post";
import allUsers from "../../../util/getAllUsers";
import allMedias from "../../../util/getAllMedias";
//import oneMedia from "../../../util/getOneMedia";
import getUserWishlist from "../../../util/getUserWishlist";
import allHistories from "../../../util/getHistories";

function Feed() {
    //const [users, setUsers] = useState([]);
    //const [medias, setMedias] = useState([]);
    //const [media, setMedia] = useState([]);
    //const [mediaTitles, setMediaTitles] = useState([]);
    //const [userMedia, setUserMedia] = useState([]);
    const [activities, setHistories] = useState([])

    useEffect(() => {
        allHistories.getAllHistories().then(activities => setHistories(activities))    
        //allUsers.getAllUsers().then((users) => setUsers(users));
        //allMedias.getAllMedias().then((medias) => setMedias(medias));
        //fillFeedArr(users, medias).then((userMedia) => setUserMedia(userMedia));     
    }, [])
    
    return (
        <>
        <h1>Feed</h1>
        <div className={styles.feedArea}>
            {activities.slice(-4).map((history)=> {
                return <Post curPost={history} />
            })}
        </div>

        </>
    )
}

export default Feed;